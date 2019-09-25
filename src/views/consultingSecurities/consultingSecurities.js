import React, { Component } from "react";

//lib
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

//css
import "./consultingSecurities.scss";

//component
import Layout from "../layout/layout";
import actions from "../../store/consulting/actions";
import roboActions from "../../store/roboTrading/actions";
import notifyActions from "../../store/notification/actions";
import { TYPE_PERMISSION, DEFAULT_TABLE, STATUS, MENU_ROBO, socketURL, socketTopic } from "../../utils/constant";
import { currency } from "../../utils/currency";

//resource
import icArrow from "../../assets/img/icArrowNext.png";
import icSkype from "../../assets/img/icSkype16x16.png";
import icTele from "../../assets/img/icTele16x16.png";
import icArrowPrev from "../../assets/img/icArrowPrev.png";
import icArrowNext from "../../assets/img/icArrowNext.png";
import icArrowStart from "../../assets/img/icArrowStart.png";
import icArrowEnd from "../../assets/img/icArrowEnd.png";
import noImg from "../../assets/img/imgThum.png";

let listChat = [];
let socket = null;
let stompClient = null;
let msgSocket = [];
let preMsgSocket = [];
let _selectedRoom = [];

let _algorithms = [
  {
    img: "",
    name: "Daily Breakout",
    author: "MBS",
    apply: "LONG/SHORT, tín hiệu báo đảo chiều, giao dịch theo ngày, đồ thị kết hợp đa khung thời gian",
    desc: "Daily Breakout chờ thị trường rơi vào vùng quá mua/quá bán (T0) sau đó sẽ vào lệnh khi thị trường đảo chiều vào ngày T+1. Chiến lược dựa trên cơ sở quy tắc giao dịch 3 ngày của Taylor với ngày mua (Long), ngày chốt (Sell) & ngày bán (Sell Short). Dữ liệu áp dụng: 1 ngày, 1 giờ và 15 phút.",
    signals: "RSI(3)"
  },
  {
    img: "",
    name: "MACD REVERSAL",
    author: "MBS",
    apply: "LONG/SHORT, tín hiệu báo đảo chiều giao dịch trong ngày, đồ thị 5 phút",
    desc: "Robo MACD reversal là robo cảnh báo sớm thông báo tín hiệu thị trường đảo chiều dựa trên nguyên lý đường chỉ báo (indicators) như MACD sẽ đảo chiều trước chỉ số. Robo sẽ đưa tín hiệu Short khi MACD tạo phân kỳ âm với đường giá (đỉnh MACD 2 thấp hơn đỉnh của MACD1 trong khi giá tại thời điểm 2 cao hơn thời điểm 1). Ngược lại, Robo sẽ đưa ra tín hiệu Long khi MACD tạo phân kỳ dương với đường giá. Chú ý: Do tính chất dò đỉnh như trên nên robo MACD reversal có thể đưa ra các tín hiệu nhiễu khi thị trường bắt đầu vào xu hướng mới.",
    signals: "MACD (12,26,9)"
  },
  {
    img: "",
    name: "SHORT TRIAL",
    author: "MBS",
    apply: "SHORT, tín hiệu báo đảo chiều, giao dịch theo trend ngắn hạn, đồ thị 5-15 phút",
    desc: "Robo sẽ báo tín hiệu dựa trên cơ sở thị trường phái sinh sẽ cần quãng thời gian tích lũy trước khi chuyển từ trạng thái tăng giá sang giảm giá.  Robo sẽ tìm kiếm những điểm vào lệnh Short an toàn để bám theo xu thế giảm giá (nếu có) với một điểm cắt lỗ ngắn để bảo toàn vốn. Dữ liệu áp dụng: 5 phút, 15 phút.",
    signals: "ADX(14), Bollinger Bands(20)"
  },
  {
    img: "",
    name: "TREND TRACK",
    author: "MBS",
    apply: "LONG/SHORT, tín hiệu bắt xu thế, giao dịch trong ngày, đồ thị 5-15 phút",
    desc: "Trend track kết hợp sự vận động của ADX và DI+ / DI- của các timeframe ngắn để vào lệnh khi nhận định thị trường bắt đầu có xu thế. Robo sẽ đưa ra tín hiệu cắt lỗ sớm để thoát khỏi các vị thế nhiễu (whipsaw) và đưa ra các tín hiệu chốt lời chậm dựa trên bộ 15 phút để tối đa hóa lợi nhuận trong trường hợp dự báo xu thế chính xác. Dữ liệu áp dụng: 5 phút, 15 phút",
    signals: "ADX (14), PSAR (0.02,0.2)"
  },
]

class ConsultingSecurities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize,
      intervalId: null,
      selectedMenu: MENU_ROBO[0].index,
      selectedRoom: [],
      selectedRoomId: [],
      selectAllRoom: false,
      listSignalRobo: [],
      contentChat: "",
      updateInfo: false,
      idUpdate: -1,
      showDetail: -1,

      roomId: "",
      statisticId: "",
      summary: "",
      winRate: "",
      profitFactor: "",
      rateWeek: "",
      rateYear: "",
      endDate: ""
    };
  }

  fetchListChat = () => {
    const data = {
      roomId: 0
    }
    this.props.fetchListChat(data);
  };
  fetchHistoryRobo = () => {
    const data = {
      roomId: this.state.selectedRoomId
    }
    this.props.fetchHistoryRobo(data);
  };
  fetchListRobo = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    const data = {
      start: start,
      limit: limit,
      status: STATUS.active
    };
    this.props.getListRobo(data);
  }
  connectSocket = () => {
    if (stompClient === null || !stompClient.connected) {
      const state = this.state;
      socket = new SockJS(socketURL);;
      stompClient = Stomp.over(socket);
      stompClient.connect({}, () => {
        stompClient.subscribe(socketTopic, temperature => {
          const data = JSON.parse(temperature.body);
          if (_selectedRoom.includes(data.algorithm)) {
            preMsgSocket = msgSocket.slice();
            msgSocket.push({robo: data.algorithm, msg: data.messenger});
          }
        })
      }, () => {
        setTimeout(() => {
          this.connectSocket();
        }, 60000);
      });
    }
  }

  componentWillMount() {
    this.fetchListChat();
    this.fetchListRobo();

    this.connectSocket();
  }
  componentDidMount() {
    var intervalId = setInterval(this.fetchListChat, 10000);
    this.setState({
      intervalId: intervalId
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
    stompClient.disconnect(()=>{
      console.log("Socket disconnected!");
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.fetchListChat();
        this.fetchListRobo();
      }
      this.props.clearNotify();
    }
    if (this.props.listChat !== nextProps.listChat) {
      listChat = nextProps.listChat.reverse();
      let showDiv = document.getElementById("boxChat");
      if (showDiv) {
        showDiv.scrollTop = showDiv.scrollHeight;
      }
    }
    // if (nextProps.historyRobo.length > 0 && this.props.historyRobo !== nextProps.historyRobo) {
    //   const props = nextProps;
    //   preMsgSocket = msgSocket.slice();
    //   for(let i = 0; i < props.historyRobo.length; i ++) {
    //     msgSocket.push({robo: "ROBO", msg: props.historyRobo[i].content});
    //   }
    // }
  }
  componentDidUpdate(prevProps, prevState) {
    if ( prevState.pageNum !== this.state.pageNum || prevState.pageSize !== this.state.pageSize ) {
      this.fetchListRobo();
    }
    if (prevState.selectedRoom !== this.state.selectedRoom) {
      this.connectSocket();
    }
    if (this.state.selectedRoomId !== prevState.selectedRoomId) {
      this.fetchHistoryRobo();
    }
    if (msgSocket !== preMsgSocket) {
      let showDiv = document.getElementById("boxRobo");
      if (showDiv) {
        showDiv.scrollTop = showDiv.scrollHeight;
      }
      preMsgSocket = msgSocket.slice();
    }
  }

  onShowDetail = index => {
    let status = index === this.state.showDetail ? -1 : index
    this.setState({
      showDetail: status
    })
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onChangeDate = date => {
    const dateStr = new Date(date).toLocaleDateString('en-GB');
    this.setState({
      endDate: dateStr
    });
  };
  onUpdate = (status, item) => {
    if (!status) {
      let state = this.state;
      state.updateInfo = status;
      state.idUpdate = -1;
      this.setState(state);
      if (state.statisticId) {
        //update
        const data = {
          id: state.statisticId,
          roomId: state.roomId,
          summary: state.summary,
          winRate: state.winRate,
          profitFactor: state.profitFactor,
          rateWeek: state.rateWeek,
          rateYear: state.rateYear,
          endDate: state.endDate
        }
        this.props.updateRobo(data);
      } else {
        const data = {
          roomId: state.roomId,
          summary: state.summary,
          winRate: state.winRate,
          profitFactor: state.profitFactor,
          rateWeek: state.rateWeek,
          rateYear: state.rateYear,
          endDate: state.endDate
        }
        this.props.createRobo(data);
      }
      
    } else {
      this.setState({
        roomId: item.id,
        statisticId: item.statisticId,
        updateInfo: status,
        idUpdate: item.id,
        summary: item.summary,
        winRate: item.winRate,
        profitFactor: item.profitFactor,
        rateWeek: item.rateWeek,
        rateYear: item.rateYear,
        endDate: item.endDate
      })
    }
  }
  onChangeMenu = index => {
    this.setState({
      selectedMenu: index
    });
  };
  handleClickRoom = (room) => {
    const state = this.state;
    const props = this.props;
    let listSelectRoom = [];
    let listSelectRoomId = [];
    let selectAll = false;
    if (state.selectedRoom.includes(room.codeRobo)) {
      listSelectRoom = state.selectedRoom.filter(item => {return item !== room.codeRobo});
      listSelectRoomId = state.selectedRoomId.filter(item => {return item !== room.id});
      selectAll = false;
    } else {
      listSelectRoom = [...state.selectedRoom, room.codeRobo];
      listSelectRoomId = [...state.selectedRoomId, room.id];
      if (listSelectRoom.length === props.listRobo.length) {
        selectAll = true;
      }
    }
    _selectedRoom = listSelectRoom.slice();
    this.setState({
      selectedRoom: listSelectRoom,
      selectedRoomId: listSelectRoomId,
      selectAllRoom: selectAll
    })
  }
  handleSelectAllRoom = (status) => {
    let listSelectRoom = [];
    let listSelectRoomId = [];
    if(status) {
      listSelectRoom = this.props.listRobo.map(item=> { return item.codeRobo });
      listSelectRoomId = this.props.listRobo.map(item=> { return item.id });
    }
    _selectedRoom = listSelectRoom.slice();
    this.setState({
      selectAllRoom: status,
      selectedRoom: listSelectRoom,
      selectedRoomId: listSelectRoomId
    })
  }
  checkSelectedRoom = (index) => {
    if(this.state.selectedRoom.includes(index)) {
      return true;
    } else {
      return false;
    }
  }
  onChangePageSize = size => {
    this.setState({
      pageSize: size,
      pageNum: DEFAULT_TABLE.pageNum
    });
  };
  onChangePageNum = pageNum => {
    this.setState({
      pageNum: pageNum
    });
  };
  onChangeChat = event => {
    this.setState({
      contentChat: event.target.value
    })
  }
  onEnter = e => {
    const key = e.which || e.keyCode;
    if (key === 13 && this.state.contentChat !== "") {
      this.handleChat();
    }
  };
  handleChat = () => {
    if(this.state.contentChat !== "") {
      const data = {
        content: this.state.contentChat,
        roomId: 0
      }
      this.props.createChat(data);
      this.setState({
        contentChat: ""
      })
    }
  }

  render() {
    const { 
      selectedMenu,
      selectedRoom,
      selectAllRoom,
      listSignalRobo,
      contentChat,
      updateInfo,
      idUpdate,
      pageNum,
      pageSize,
      showDetail,

      summary,
      winRate,
      profitFactor,
      rateWeek,
      rateYear,
      endDate
    } = this.state;
    let convertDate = "";
    if (endDate) {
      convertDate = new Date(endDate.replace( /(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"));
    }

    return (
      <Layout>
        <div className="consulting-page">
          <div className="consulting-banner">
            <h3>TƯ VẤN CHỨNG KHOÁN PHÁI SINH</h3>
          </div>
          {
            this.props.profile.username ? <div className="page-content">
              <div className="consulting-menu">
                {MENU_ROBO.map((item, index) => {
                  return (
                    <div key={index} onClick={() => this.onChangeMenu(item.index)}
                      className={selectedMenu === item.index ? "menu-item active" : "menu-item"} >
                      {item.name}
                    </div>
                  );
                })}
              </div>
              {
                (selectedMenu === MENU_ROBO[0].index || selectedMenu === MENU_ROBO[2].index) && 
                <div className="layout-robot-consulting">
                  <div className="title">
                    HỆ THỐNG <span>ROBOT</span> KHUYẾN NGHỊ
                  </div>
                  <hr />
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">HỆ THỐNG</th>
                          <th scope="col" className="table-center-element">LOẠI<br />TÀI SẢN</th>
                          <th scope="col" className="table-center-element">NHÀ <br/>PHÁT TRIỂN</th>
                          <th scope="col" className="table-center-element">
                            NGÀY
                            <br/>
                            BẮT ĐẦU
                          </th>
                          <th scope="col" className="table-center-element">
                            TỔNG LÃI LỖ
                            <br />
                            (x1000 VNĐ)
                          </th>
                          <th scope="col" className="table-center-element">
                            TỶ LỆ
                            <br />
                            THẮNG
                          </th>
                          <th scope="col" className="table-center-element">
                            PROFIT
                            <br />
                            FACTOR
                          </th>
                          <th scope="col" className="table-center-element">
                            LÃI LỖ (x1000 VNĐ)
                            <br/>THÁNG HIỆN TẠI
                          </th>
                          <th scope="col" className="table-center-element">
                            LỢI NHUẬN (%)
                            <br />
                            QUY THEO NĂM
                          </th>
                          <th scope="col" className="table-center-element">
                            NGÀY
                            <br />
                            CẬP NHẬT
                          </th>
                          <th scope="col" className="table-center-element">
                            {
                              this.props.profile.permissionId === TYPE_PERMISSION.EXPERT
                              || this.props.profile.permissionId === TYPE_PERMISSION.ADMIN ?
                              <div>
                                CẬP NHẬT
                              </div>
                              : <div></div>
                            }
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.listRobo.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.name ? item.name : ""}</td>
                              <td>{item.symbol ? item.symbol : ""}</td>
                              <td>{item.developer ? item.developer : ""}</td>
                              <td>{item.startRobo ? item.startRobo : ""}</td>
                              <td>
                                {
                                  updateInfo && idUpdate === item.id ?
                                    <input className="form-control input-currency"
                                      name="summary" value={summary} onChange={this.onChange}/>
                                    :<div>{item.summary ? currency(item.summary) : ""}</div>
                                }
                              </td>
                              <td>
                                {
                                  updateInfo && idUpdate === item.id ?
                                    <input className="form-control"
                                      name="winRate" value={winRate} onChange={this.onChange}/>
                                    :<div>{item.winRate ? `${item.winRate}%` : ""}</div>
                                }
                              </td>
                              <td>
                                {
                                  updateInfo && idUpdate === item.id ?
                                    <input className="form-control"
                                      name="profitFactor" value={profitFactor} onChange={this.onChange}/>
                                    :<div>{item.profitFactor ? item.profitFactor : ""}</div>
                                }
                              </td>
                              <td>{
                                  updateInfo && idUpdate === item.id ?
                                    <input className="form-control input-currency"
                                      name="rateWeek" value={rateWeek} onChange={this.onChange}/>
                                    :<div>{item.rateWeek ? currency(item.rateWeek) : ""}</div>
                                }
                              </td>
                              <td>
                                {
                                  updateInfo && idUpdate === item.id ?
                                    <input className="form-control"
                                      name="rateYear" value={rateYear} onChange={this.onChange}/>
                                    :<div>{item.rateYear ? `${item.rateYear}%` : ""}</div>
                                }
                              </td>
                              <td>
                                {
                                  updateInfo && idUpdate === item.id ?
                                    <DatePicker
                                      dateFormat="dd/MM/yyyy"
                                      selected={convertDate}
                                      onChange={this.onChangeDate}
                                    />
                                    :<div>{item.endDate ? item.endDate : ""}</div>
                                }
                              </td>
                              <td className="table-center-element">
                              {
                                this.props.profile.permissionId === TYPE_PERMISSION.EXPERT
                                  || this.props.profile.permissionId === TYPE_PERMISSION.ADMIN ?
                                  <React.Fragment>
                                    {
                                      idUpdate === item.id && <button className="btn-register active"
                                        onClick={()=>this.onUpdate(!updateInfo, item)} >
                                        LƯU
                                      </button>
                                    }
                                    {
                                      !updateInfo && <React.Fragment>
                                        <button className="btn-register"
                                          onClick={()=>this.onUpdate(!updateInfo, item)} >
                                          SỬA
                                        </button>
                                        <button className={this.checkSelectedRoom(item.codeRobo) ? "btn-register active": "btn-register"}
                                          onClick={()=>this.handleClickRoom(item)} >
                                          XEM
                                        </button>
                                      </React.Fragment>
                                    }
                                  </React.Fragment>
                                  : <React.Fragment>
                                    <button className={this.checkSelectedRoom(item.codeRobo) ? "btn-register active": "btn-register"}
                                      onClick={()=>this.handleClickRoom(item)} >
                                      XEM
                                    </button>
                                    <a className="ic-robo-tele" href={item.linkTelegram} target="_blank" rel="noopener noreferrer" >
                                      <img alt="ic-tele" src={icTele}/>  
                                    </a>
                                  </React.Fragment>
                              }
                              </td>
                            </tr>
                          );
                        })}
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td colSpan="2">
                            <button className={selectAllRoom ? "btn btn-register btn-all active" : "btn btn-register btn-all"}
                              onClick={()=>this.handleSelectAllRoom(!selectAllRoom)}>XEM TẤT CẢ</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {this.props.listRobo && this.props.listRobo.length > 0 && (
                      <div className="paging-box">
                        <Pagination
                          firstPageText={ <img alt="btnStart" className="btn-Pagination" src={icArrowStart}/> }
                          lastPageText={ <img alt="btnEnd" className="btn-Pagination" src={icArrowEnd}/> }
                          prevPageText={ <img alt="btnBack" className="btn-Pagination" src={icArrowPrev} /> }
                          nextPageText={ <img alt="btnNext" className="btn-Pagination" src={icArrowNext} /> }
                          activePage={pageNum}
                          itemsCountPerPage={pageSize}
                          totalItemsCount={this.props.total}
                          pageRangeDisplayed={5}
                          onChange={this.onChangePageNum}
                        />
                        <div className="form-group sort-by">
                          <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownRows"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                              {`${pageSize} hàng`}
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-right select-row" aria-labelledby="dropdownRows" >
                              <button className="dropdown-item" onClick={e => this.onChangePageSize(5)} >
                                {`5 hàng`}
                              </button>
                              <button className="dropdown-item" onClick={e => this.onChangePageSize(10)} >
                                {`10 hàng`}
                              </button>
                              <button className="dropdown-item" onClick={e => this.onChangePageSize(15)} >
                                {`15 hàng`}
                              </button>
                              <button className="dropdown-item" onClick={e => this.onChangePageSize(20)} >
                                {`20 hàng`}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="notice-msg">*Giả định vốn đầu tư ban đầu là 20 triệu VND.</div>
                  <div className="notice-msg">**Kết quả backtest là trước thuế phí.</div>
                  <div className="box-chat-and-robo">
                    <div className="box-chat-consulting">
                      <div className="title">LIVE TRADING</div>
                      <hr />
                      <div className="box-chat" id="boxChat">
                        {
                          listChat.map((item, index) => {
                            var currentDate = new Date(item.createDate);
                            const date = currentDate.getDate();
                            const month = currentDate.getMonth() + 1;
                            const year = currentDate.getFullYear();
                            var hours = currentDate.getHours();
                            var minutes = "0" + currentDate.getMinutes();
                            var seconds = "0" + currentDate.getSeconds();
                            var formattedTime = `${date}/${month}/${year} - ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
                            return <p key={index}>
                                <span className="chat-title">{formattedTime} : </span>
                                <span className="chat-content">{item.content}</span>
                              </p>
                          })
                        }
                      </div>
                      {
                        this.props.profile.permissionId === TYPE_PERMISSION.EXPERT && <div className="box-input-chat">
                          <input type="text" className="form-control" id="inputChat" value={contentChat}
                            onChange={this.onChangeChat} onKeyDown={this.onEnter}/>
                          <button onClick={this.handleChat} className="btn btn-primary">Gửi</button>
                        </div>
                      }
                    </div>
                    <div className="box-robo-signal">
                      <div className="title">ROBO TRADING</div>
                      <hr />
                      <div className="box-chat" id="boxRobo">
                        {
                          this.props.historyRobo && this.props.historyRobo.map((item, index) => {
                            return <p key={index}>
                              <span className="chat-title">ROBO : </span>
                              <span className="chat-content">{item.content}</span>
                            </p>
                          })
                        }
                        {
                          msgSocket.map((item, index) => {
                            return <p key={index}>
                              <span className="chat-title">{item.robo} : </span>
                              <span className="chat-content">{item.msg}</span>
                            </p>
                          })
                        }
                      </div>
                    </div>
                  </div>
                  
                  <div className="title">CÔNG CỤ GIAO DỊCH</div>
                  <hr />
                  <div className="layout-tool">
                    <div className="tool-trader-layout">
                      <div className="tool-trader-item">
                        <img src={icArrow} alt="ic-arow" />
                        Robot cảnh báo (trade alerts miễn phí):
                      </div>
                      <a className="tool-trader-item"
                        href="https://mbs.com.vn/vi/khach-hang-ca-nhan/dich-vu-chung-khoan/dich-vu-dien-tu#du-lieu-thoi-gian-thuc"
                        target="_blank" rel="noopener noreferrer" >
                        <img src={icArrow} alt="ic-arow" />
                        D24 datafeed hỗ trợ
                      </a>
                    </div>
                    <div className="room-trader-layout">
                      <a className="room-trader-item"
                        href="https://t.me/mbsrobot5p" target="_blank" rel="noopener noreferrer" >
                        <img src={icTele} alt="ic-tele"/>
                        Room 5 phút
                      </a>
                      <a className="room-trader-item"
                        href="https://t.me/mbsrobot15p" target="_blank" rel="noopener noreferrer" >
                        <img src={icTele} alt="ic-skype" />
                        Room 15 phút
                      </a>
                      <a className="room-trader-item"
                        href="https://t.me/mbsrobot515p" target="_blank" rel="noopener noreferrer" >
                        <img src={icTele} alt="ic-skype" />
                        Room 5-15 phút
                      </a>
                    </div>
                  </div>
                </div>
              }
              {
                selectedMenu === MENU_ROBO[3].index && <div className="layout-discovery-system">
                  {
                    _algorithms.length > 0 ? <div className="box-algorithms">
                    {
                      _algorithms.map((item, index) => {
                        return <div className="item-algorithm" onClick={() => this.onShowDetail(index)}>
                          <img src={item.img !== "" ? item.img : noImg}/>
                          <div className="name">{item.name}</div>
                          <div className="author"><b>Nhà phát triển:</b> {item.author}</div>
                          <div className="signals"><b>Bộ tín hiệu:</b> {item.signals}</div>
                          <div className={ showDetail === index ? "box-detail show" : "box-detail"}>
                            <div className="apply"><b>Áp dụng:</b> {item.apply}</div>
                            <div className="desc">{item.desc}</div>
                          </div>
                        </div>
                      })
                    }
                    </div>
                    : <div className="request-login">Chưa có dữ liệu về thuật toán</div>
                  }
                </div>
              }
              {
                selectedMenu === MENU_ROBO[1].index && <div className="request-login">Comming soon</div>
              }
              
            </div> : <div className="page-content">
              <div className="request-login">Vui lòng đăng nhập để sử dụng chức năng này</div>
            </div>
          }
          
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    listChat: state.ChatConsulting.listChat,
    historyRobo: state.ChatConsulting.historyRobo,
    listRobo: state.Robos.listRobo,
    total: state.Robos.total,
    success: state.Notifys.success,
    message: state.Notifys.message,
    profile: state.Users.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListChat: data => {
      dispatch(actions.listChat(data));
    },
    fetchHistoryRobo: data => {
      dispatch(actions.historyRobo(data));
    },
    createChat: data => {
      dispatch(actions.createChat(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    },
    getListRobo: data => {
      dispatch(roboActions.listRobo(data));
    },
    createRobo: data => {
      dispatch(roboActions.createRobo(data));
    },
    updateRobo: data => {
      dispatch(roboActions.updateRobo(data));
    },
    changeStatusRobo: data => {
      dispatch(roboActions.changeStatusRobo(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsultingSecurities);
