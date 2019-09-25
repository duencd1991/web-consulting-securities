import React, { Component } from "react";
import "./signIn.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import imgBgLeft from "../../assets/img/bg_SignIn.jpg";
import logoMbs from "../../assets/img/logo-blue.png";
import userActions from "../../store/user/actions";
import notifyActions from "../../store/notification/actions";
import { toast } from "react-toastify";
import sha256 from "sha256";

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      newPass: "",
      changePass: false,

      validate: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      if (nextProps.success) {
        this.setState({
          changePass: false
        })
      }
      toast(nextProps.message);
      this.props.clearNotify();
    }
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onValidateForm = () => {
    const {
      user,
      pass,
      newPass,
      changePass
    } = this.state;
    let check = user !== "" && pass !== "";
    if (changePass) {
      check = check && newPass !== ""
    }
    this.setState({
      validate: check
    })
    return check;
  }
  onSubmit = () => {
    const state = this.state;
    if (this.onValidateForm()) {
      if (state.changePass) {
        if (state.user !== "" && state.pass !== "" && state.newPass !== "") {
          const passSHA256 = sha256(state.pass);
          const newPassSHA256 = sha256(state.newPass);
          const data = {
            username: state.user,
            password: passSHA256,
            newPass: newPassSHA256
          }
          this.props.changePass(data);
        }
      } else {
        if (state.user !== "" && state.pass !== "") {
          const passSHA256 = sha256(state.pass);
          const data = {
            username: state.user,
            password: passSHA256
          }
          this.props.login(data);
        }
      }
    }
  }
  onEnter = e => {
    const key = e.which || e.keyCode;
    const state = this.state;
    if (key === 13 && state.user !== "" && state.pass !== "") {
      this.onSubmit();
    }
  };
  onClickChangePass = (status) => {
    this.setState({
      changePass: status
    })
  }
  render() {
    const {
      user,
      pass,
      newPass,
      changePass,
      validate
    } = this.state;
    const props = this.props;

    return (
      <div className="signin_page">
        <div className="contentForm">
          <div className="leftF">
            <img src={imgBgLeft} alt="Đăng nhập" />
            <div className="titleSignin top14">Đăng Nhập</div>
            <div className="checkTKCK">
              <a href="/" alt="Trang chủ" className="logo">
                <img src={logoMbs} alt="" />
              </a>
              <p className="copyRight">Copyrights 2000 - 2019 MBS.</p>
            </div>
          </div>
          <div className="rightF">
            <div className="form-detail" id="myform">
              <div className="form-row">
                <label htmlFor="user">Tên đăng nhập</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  className="input-text"
                  onChange={this.onChange}
                  onKeyDown={this.onEnter}
                />
                {!validate && user === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="pass">Mật khẩu</label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  className="input-text"
                  onChange={this.onChange}
                  onKeyDown={this.onEnter}
                />
                {!validate && pass === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              {
                changePass && <div className="form-row">
                  <label htmlFor="pass">Mật khẩu mới</label>
                  <input
                    type="password"
                    name="newPass"
                    id="newPass"
                    className="input-text"
                    onChange={this.onChange}
                    onKeyDown={this.onEnter}
                  />
                  {!validate && newPass !== pass && (
                    <div className="alert alert-warning" role="alert">
                      Vui lòng nhập thông tin
                    </div>
                  )}
                </div>
              }
              <div className="form-row-check txtRight">
                {
                  changePass ? <div className="checkTKCK">
                    <label>
                      <a className="txt14" href="#" onClick={() => this.onClickChangePass(false)}>
                        Đăng nhập
                      </a>
                    </label>
                  </div> : <div className="checkTKCK">
                    <label>
                      <a className="txt14" href="#" onClick={() => this.onClickChangePass(true)}>
                        Đổi mật khẩu
                      </a>
                    </label>
                  </div>
                }
                <div className="checkTKCK">
                  <label>
                    <a className="txt14" href="/forgot-pass-word">
                      Bạn quên mật khẩu?
                    </a>
                  </label>
                </div>
              </div>
              <div className="form-row-last">
                <button className="register" onClick={this.onSubmit}>
                  {
                    changePass ? <span>Xác nhận</span> : <span>Đăng Nhập</span>
                  }
                </button>
                <p>
                  Bạn chưa có tài khoản? <a href="./sign-up">Đăng ký</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePass: data => {
      dispatch(userActions.changePass(data));
    },
    login: data => {
      dispatch(userActions.login(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

SignIn.propTypes = {
  login: PropTypes.func,
  clearNotify: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
