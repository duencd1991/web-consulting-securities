import React, { Component } from "react";
import "../signIn/signIn.scss";
import "./signUp.scss";
import imgBgLeft from "../../assets/img/bg_SignIn.jpg";
import logoMbs from "../../assets/img/logo-blue.png";

class SignUp extends Component {
  render() {
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
              <input
                type="checkbox"
                name="frequency"
                tabIndex="0"
                className="hidden"
              />
              <label>Tôi đã có tài khoản chứng khoán</label>
            </div>
          </div>
          <div className="rightF">
            <form className="form-detail" action="#" method="post" id="myform">
              <div className="form-row">
                <label htmlFor="fullname">Họ và tên</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="input-text"
                />
              </div>
              <div className="form-row">
                <label htmlFor="tel">Số điện thoại</label>
                <input type="text" name="tel" id="tel" className="input-text" />
              </div>
              <div className="form-row">
                <label htmlFor="your_email">E-MAIL</label>
                <input
                  type="text"
                  name="your_email"
                  id="your_email"
                  className="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
              <div className="form-row">
                <label htmlFor="your_addr">Địa chỉ</label>
                <input
                  type="text"
                  name="your_email"
                  id="your_addr"
                  className="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
              <div className="form-row">
                <label htmlFor="your_accName">Tên tài khoản</label>
                <input
                  type="text"
                  name="your_accName"
                  id="your_accName"
                  className="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                />
              </div>
              <div className="form-row">
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="input-text"
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="comfirm_password">Nhập lại mật khẩu</label>
                <input
                  type="password"
                  name="comfirm_password"
                  id="comfirm_password"
                  className="input-text"
                  required
                />
              </div>
              <div className="form-row-check">
                <div className="checkTKCK">
                  <input
                    type="checkbox"
                    name="frequency"
                    tabIndex="0"
                    className="hidden"
                  />
                  <label>
                    Tôi đã đọc và đồng ý với{" "}
                    <a href="./privaci-policy-term-service">
                      điều khoản sử dụng
                    </a>{" "}
                    website
                  </label>
                </div>
              </div>
              <div className="form-row-last">
                <button className="register">
                  <span>Đăng ký</span>
                </button>
                <p>
                  Bạn có tài khoản rồi
                  <a href="./sign-in">Đăng nhập</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
