import React, { Component } from "react";
import Layout from "../layout/layout";
import { connect, dispatch } from "react-redux";
import "./consultingSecurities.scss";
import icArrow from "../../assets/img/icArrowNext.png";
import icSkype from "../../assets/img/icSkype16x16.png";
import icTele from "../../assets/img/icTele16x16.png";
import actions from "../../store/consulting/actions";
import notifyActions from "../../store/notification/actions";
import { TYPE_PERMISSION } from "../../utils/constant";

const listMenu = [
  "HỆ THỐNG MBS",
  "HỆ THỐNG BÊN THỨ BA PHÁT TRIỂN",
  "TOP 10 HỆ THỐNG",
  "KHÁM PHÁ HỆ THỐNG"
];
const listRobot = [
  {
    heThong: "Breakout",
    loaiTaiSan: "VN30F1M",
    nhaPhatTrien: "PTSP",
    batDau: "3/1/2019",
    tongLoLai: null,
    tyLeThang: null,
    profitFactor: null,
    laiLoRealTime: null,
    loiNhuan: null,
    urlRegister: 1
  },
  {
    heThong: "EMA",
    loaiTaiSan: "VN30F1M",
    nhaPhatTrien: "PTSP",
    batDau: "3/1/2019",
    tongLoLai: null,
    tyLeThang: null,
    profitFactor: null,
    laiLoRealTime: null,
    loiNhuan: null,
    urlRegister: 2
  },
  {
    heThong: "Fadeout",
    loaiTaiSan: "VN30F1M",
    nhaPhatTrien: "PTSP",
    batDau: "3/1/2019",
    tongLoLai: null,
    tyLeThang: null,
    profitFactor: null,
    laiLoRealTime: null,
    loiNhuan: null,
    urlRegister: 3
  }
];
let listChat = [];

class ConsultingSecurities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalId: null,
      selectedMenu: 0,
      selectedRoom: 1,
      contentChat: ""
    };
  }

  fetchListChat = () => {
    const data = {
      roomId: this.state.selectedRoom
    };
    this.props.fetchListChat(data);
  };

  componentWillMount() {
    this.fetchListChat();
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
      if (nextProps.success) {
        this.fetchListChat();
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
        roomId: this.state.selectedRoom
      }
      this.props.createChat(data);
      this.setState({
        contentChat: ""
      })
    }
  }

  render() {
    const { selectedMenu, selectedRoom, contentChat } = this.state;
    return (
      <Layout>
        <div className="consulting-page">
          <div className="consulting-banner">
            <h3>TƯ VẤN CHỨNG KHOÁN PHÁI SINH</h3>
          </div>
          {
            this.props.profile.username ? <div className="page-content">
              <div className="consulting-menu">
                {listMenu.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => this.onChangeMenu(index)}
                      className={
                        selectedMenu === index ? "menu-item active" : "menu-item"
                      }
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
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
                        <th scope="col">LOẠI TÀI SẢN</th>
                        <th scope="col">NHÀ PHÁT TRIỂN</th>
                        <th scope="col">BẮT ĐẦU</th>
                        <th scope="col">TỔNG LÃI LỖ</th>
                        <th scope="col">TỶ LỆ THẮNG</th>
                        <th scope="col">PROFIT FACTOR</th>
                        <th scope="col" className="table-center-element">
                          LÃI LỖ
                          <br />
                          REALTIME
                        </th>
                        <th scope="col" className="table-center-element">
                          LỢI NHUẬN
                          <br />
                          (%) NĂM
                        </th>
                        <th scope="col" className="table-center-element">
                          CLICK
                          <br />
                          ĐỂ ĐĂNG KÝ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listRobot.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.heThong ? item.heThong : "..."}</td>
                            <td>{item.loaiTaiSan ? item.loaiTaiSan : "..."}</td>
                            <td>
                              {item.nhaPhatTrien ? item.nhaPhatTrien : "..."}
                            </td>
                            <td>{item.batDau ? item.batDau : "..."}</td>
                            <td>{item.tongLoLai ? item.tongLoLai : "..."}</td>
                            <td>{item.tyLeThang ? item.tyLeThang : "..."}</td>
                            <td>
                              {item.profitFactor ? item.profitFactor : "..."}
                            </td>
                            <td>
                              {item.laiLoRealTime ? item.laiLoRealTime : "..."}
                            </td>
                            <td>{item.loiNhuan ? item.loiNhuan : "..."}</td>
                            <td className="table-center-element">
                              <button
                                className={selectedRoom === item.urlRegister ? "btn-register active": "btn-register"}
                                onClick={()=>this.handleClickRoom(item.urlRegister)}
                              >
                                CLICK
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="title">LIVE TRADING</div>
                <hr />
                <div className="box-chat-consulting">
                  <div className="box-chat" id="boxChat">
                    {
                      listChat.map((item, index) => {
                        var date = new Date(item.createDate);
                        var hours = date.getHours();
                        var minutes = "0" + date.getMinutes();
                        var seconds = "0" + date.getSeconds();
                        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                        return <p key={index}>
                          <b>({formattedTime}) : </b>
                          <span>{item.content}</span>
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
                <div className="title">CÔNG CỤ GIAO DỊCH</div>
                <hr />
                <div className="layout-tool">
                  <div className="tool-trader-layout">
                    <div className="tool-trader-item">
                      <img src={icArrow} alt="ic-arow" />
                      Robot cảnh báo (trade alerts miễn phí)
                    </div>
                    <div className="tool-trader-item">
                      <img src={icArrow} alt="ic-arow" />
                      D24 datafeed hỗ trợ
                    </div>
                  </div>
                  <div className="room-trader-layout">
                    <div className="room-trader-item">
                      <img src={icTele} alt="ic-tele" />
                      Telegram
                    </div>
                    <div className="room-trader-item">
                      <img src={icSkype} alt="ic-skype" />
                      Room 1
                    </div>
                    <div className="room-trader-item">
                      <img src={icSkype} alt="ic-skype" />
                      Room 2
                    </div>
                  </div>
                </div>
              </div>
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
    total: state.ChatConsulting.total,
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConsultingSecurities);
