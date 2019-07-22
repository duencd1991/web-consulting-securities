import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../signIn/signIn.scss";
import "./signUp.scss";
import imgBgLeft from "../../assets/img/bg_SignIn.jpg";
import logoMbs from "../../assets/img/logo-blue.png";
import userActions from "../../store/user/actions";
import { toast } from "react-toastify";
import notifyActions from "../../store/notification/actions";
import { TYPE_ACCOUNT, PERMISSION } from "../../utils/constant";
import validator from "validator";

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      username: "",
      password: "",
      type: TYPE_ACCOUNT[0].type,
      permissionId: PERMISSION[1].type,
      confirmPass: "",

      validate: true,
      validateEmail: "",
      validatePassword: "",
      agreement: false
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onCheckbox = e => {
    this.setState({
      agreement: e.target.checked
    })
  }
  validateForm = () => {
    const {
      fullName,
      phoneNumber,
      email,
      address,
      username,
      password,
      confirmPass
    } = this.state;
    let check = fullName !== "" && phoneNumber !== "" && address !== "" && username !== "" && password !== "";
    let checkEmail = "";
    if (email !== "") {
      if (!validator.isEmail(email)) {
        check = false;
        checkEmail= "Email không đúng định dạng";
      } else {
        checkEmail="";
      }
    } else {
      checkEmail= "Vui lòng nhập thông tin";
    }
    let checkPasswoard = "";
    if (password !== "") {
      if (password !== confirmPass) {
        check = false;
        checkPasswoard = "Xác nhận mật khẩu không chính xác"
      } else {
        checkPasswoard = "";
      }
    }
    this.setState({
      validate: check,
      validateEmail: checkEmail,
      validatePassword: checkPasswoard
    });
    return check;
  }
  onSubmit = () => {
    const state = this.state;
    if (state.agreement && this.validateForm()) {
      const data = {
        username: state.username,
        email: state.email,
        phoneNumber: state.phoneNumber,
        address: state.address,
        password: state.password,
        fullName: state.fullName,
        type: state.type,
        permissionId: state.permissionId
      }
      this.props.register(data);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/sign-in`);
      }
      this.props.clearNotify();
    }
  }

  render() {
    const {
      fullName,
      phoneNumber,
      email,
      address,
      username,
      password,
      confirmPass,

      validate,
      validateEmail,
      validatePassword,
      agreement
    } = this.state;

    return (
      <div className="signin_page">
        <div className="contentForm">
          <div className="leftF">
            <img src={imgBgLeft} alt="Đăng nhập" />
            <div className="titleSignin top14">
              Đăng Ký
              <br />
              Tài Khoản Website
            </div>
            <div className="checkTKCK">
              <a href="/" alt="Trang chủ" className="logo">
                <img src={logoMbs} alt="" />
              </a>
              <p className="copyRight">Copyrights 2000 - 2019 MBS.</p>
              {/* <input
                type="checkbox"
                name="frequency"
                tabIndex="0"
                className="hidden"
              />
              <label>Tôi đã có tài khoản chứng khoán</label> */}
            </div>
          </div>
          <div className="rightF">
            <div className="form-detail" id="myform">
              <div className="form-row">
                <label htmlFor="fullName">Họ và tên</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="input-text"
                  value={fullName}
                  onChange={this.onChange}
                />
                {!validate && fullName === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="phoneNumber">Số điện thoại</label>
                <input type="text" name="phoneNumber" id="phoneNumber"
                  className="input-text" value={phoneNumber} onChange={this.onChange} />
                {!validate && phoneNumber === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="email">E-MAIL</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="input-text"
                  value={email}
                  onChange={this.onChange}
                />
                {!validate && validateEmail !== "" && (
                  <div className="alert alert-warning" role="alert">
                    {validateEmail}
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="input-text"
                  value={address}
                  onChange={this.onChange}
                />
                {!validate && address === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="username">Tên tài khoản</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="input-text"
                  value={username}
                  onChange={this.onChange}
                />
                {!validate && username === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-text"
                  value={password}
                  onChange={this.onChange}
                />
                {!validate && password === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="confirmPass">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  name="confirmPass"
                  id="confirmPass"
                  className="input-text"
                  value={confirmPass}
                  onChange={this.onChange}
                />
                {!validate && validatePassword !== "" && (
                  <div className="alert alert-warning" role="alert">
                    {validatePassword}
                  </div>
                )}
              </div>
              <div className="form-row-check">
                <div className="checkTKCK">
                  <input
                    type="checkbox"
                    name="frequency"
                    tabIndex="0"
                    className="hidden"
                    onChange={this.onCheckbox}
                  />
                  <label>
                    Tôi đã đọc và đồng ý với{" "}
                    <a href="./terms-of-use">
                      điều khoản sử dụng
                    </a>{" "}
                    website
                  </label>
                </div>
              </div>
              <div className="form-row-last">
                <button className={agreement ? "register" : "register disabled"} onClick={this.onSubmit}>
                  <span>Đăng ký</span>
                </button>
                <p>
                  Bạn có tài khoản rồi{" "}
                  <a href="./sign-in">Đăng nhập</a>
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
    register: data => {
      dispatch(userActions.createUser(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

SignUp.propTypes = {
  register: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
