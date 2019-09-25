import React, { Component } from "react";
import "../signIn/signIn.scss";
import "../forgotPassWord/forgotPassWord.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import imgBgLeft from "../../assets/img/bg_SignIn.jpg";
import logoMbs from "../../assets/img/logo-blue.png";
import userActions from "../../store/user/actions";
import notifyActions from "../../store/notification/actions";
import { toast } from "react-toastify";
import validator from "validator";

class ForgotPassWord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      validateEmail: ""
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onEnter = e => {
    const key = e.which || e.keyCode;
    const state = this.state;
    if (key === 13 && state.email !== "") {
      this.onSubmit();
    }
  };

  onSubmit = () => {
    if (this.onValidateForm()) {
      const data = {
        email: this.state.email
      }
      this.props.resetPass(data);
    }
  }

  onValidateForm = () => {
    let checkEmail = "";
    let check = true;
    if (this.state.email !== "") {
      if (!validator.isEmail(this.state.email)) {
        checkEmail= "Email không đúng định dạng";
        check = false;
      } else {
        checkEmail="";
      }
    } else {
      checkEmail= "Vui lòng nhập thông tin";
      check = false;
    }
    this.setState({
      validateEmail: checkEmail
    })
    return check;
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      if (nextProps.success) {
        this.props.history.push(`/sign-in`);
      }
      toast(nextProps.message);
      this.props.clearNotify();
    }
  }

  render() {
    const {
      email,
      validateEmail
    } = this.state;

    return (
      <div className="signin_page fgp_page">
        <div className="contentForm">
          <div className="leftF">
            <img src={imgBgLeft} alt="Đăng nhập" />
            <div className="titleSignin top14">Quên mật khẩu</div>
            <div className="checkTKCK">
              <a href="/" alt="Trang chủ" className="logo">
                <img src={logoMbs} alt="" />
              </a>
              <p className="copyRight">Copyrights 2000 - 2019 MBS.</p>
            </div>
          </div>
          <div className="rightF">
            <div className="form-detail">
              <div className="form-row">
                <label htmlFor="email">E-MAIL</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  className="input-text"
                  placeholder="Nhập lại email của bạn"
                  onKeyDown={this.onEnter}
                  onChange={this.onChange}
                />
              </div>
              {validateEmail !== "" && (
                <div className="alert alert-warning" role="alert">
                  {
                    validateEmail
                  }
                </div>
              )}
              <div className="form-row-last">
                <a className="register" onClick={this.onSubmit}>
                  <span>Xác nhận</span>
                </a>
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
    resetPass: data => {
      dispatch(userActions.resetPass(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

ForgotPassWord.propTypes = {
  login: PropTypes.func,
  clearNotify: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassWord);
