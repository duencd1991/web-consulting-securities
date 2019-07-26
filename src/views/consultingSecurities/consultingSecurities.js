import React, { Component } from "react";
import Layout from "../layout/layout";
import { connect } from "react-redux";
import "./consultingSecurities.scss";
import icArrow from "../../assets/img/icArrowNext.png";
import icSkype from "../../assets/img/icSkype16x16.png";
import icTele from "../../assets/img/icTele16x16.png";
import icArrowPrev from "../../assets/img/icArrowPrev.png";
import icArrowNext from "../../assets/img/icArrowNext.png";
import icArrowStart from "../../assets/img/icArrowStart.png";
import icArrowEnd from "../../assets/img/icArrowEnd.png";
import actions from "../../store/consulting/actions";
import roboActions from "../../store/roboTrading/actions";
import notifyActions from "../../store/notification/actions";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { TYPE_PERMISSION, DEFAULT_TABLE, STATUS, MENU_ROBO } from "../../utils/constant";
import { currency } from "../../utils/currency";

let listChat = [];

class ConsultingSecurities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize,
      intervalId: null,
      selectedMenu: MENU_ROBO[0].index,
      selectedRoom: 1,
      contentChat: "",
      updateInfo: false,
      idUpdate: -1,

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
    };
    this.props.fetchListChat(data);
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

  componentWillMount() {
    this.fetchListChat();
    this.fetchListRobo();
  }
  componentDidMount() {
    var intervalId = setInterval(this.fetchListChat, 10000);
    this.setState({
      intervalId: intervalId
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
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
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.selectedRoom !== this.state.selectedRoom) {
      this.fetchListChat();
    }
    if ( prevState.pageNum !== this.state.pageNum ||prevState.pageSize !== this.state.pageSize ) {
      this.fetchListRobo();
    }
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
  handleClickRoom = index => {
    this.setState({
      selectedRoom: index
    })
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
      contentChat,
      updateInfo,
      idUpdate,
      pageNum,
      pageSize,

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
                selectedMenu === MENU_ROBO[0].index || selectedMenu === MENU_ROBO[2].index ?
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
                            LÃI LỖ (VNĐ)
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
                                        <button className={selectedRoom === item.id ? "btn-register active": "btn-register"}
                                          onClick={()=>this.handleClickRoom(item.id)} >
                                          XEM
                                        </button>
                                      </React.Fragment>
                                    }
                                  </React.Fragment>
                                  : <React.Fragment>
                                    <button className={selectedRoom === item.urlRegister ? "btn-register active": "btn-register"}
                                      onClick={()=>this.handleClickRoom(item.urlRegister)} >
                                      XEM
                                    </button>
                                    <a href={item.linkTelegram} target="_blank" rel="noopener noreferrer" >
                                      <img alt="ic-tele" src={icTele}/>  
                                    </a>
                                  </React.Fragment>
                              }
                              </td>
                            </tr>
                          );
                        })}
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
                  <div className="title">LIVE TRADING</div>
                  <hr />
                  <div className="box-chat-and-robo">
                    <div className="box-chat-consulting">
                      <div className="box-chat" id="boxChat">
                        {
                          listChat.map((item, index) => {
                            var currentDate = new Date(item.createDate);
                            const date = currentDate.getDate();
                            const month = currentDate.getMonth() + 1;
                            const year = currentDate.getYear();
                            var hours = currentDate.getHours();
                            var minutes = "0" + currentDate.getMinutes();
                            var seconds = "0" + currentDate.getSeconds();
                            var formattedTime = `${date}/${month}/${year} - ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
                            return <p key={index}>
                                <span className="chat-datetime">{formattedTime} : </span>
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
                      Tín hiệu robo
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
              : <div className="request-login">Comming soon</div>
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
