import React, { Component } from 'react';
// import Layout from '../layout/layout';
import './signIn.scss';
import imgBgLeft from '../../assets/img/bg_SignIn.jpg';
import logoMbs from '../../assets/img/logo-blue.png';

export default class signIn extends Component {
  render() {
    return (
      <div className='signin_page'>
        <div className='contentForm'>
          <div className='leftF'>
            <img src={imgBgLeft} alt="Đăng nhập" />
            <div className='titleSignin top14'>Đăng Nhập</div>
            <div class="checkTKCK"><a href="/" alt="Trang chủ" className='logo'><img src={logoMbs} alt=""/></a>
            <p className="copyRight">Copyrights 2000 - 2019 MBS.</p>
            </div>
          </div>
          <div className='rightF'>
            <form class="form-detail" action="#" method="post" id="myform">
              <div class="form-row">
                <label for="your_email">Tên đăng nhập/E-MAIL</label>
                <input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
              </div>
              <div class="form-row">
                <label for="password">Mật khẩu</label>
                <input type="password" name="password" id="password" class="input-text" required />
              </div>
              <div class="form-row-check txtRight">
                <div className='checkTKCK'>
                  <label><a className='txt14' href="./forgot-pass-word">Bạn quên mật khẩu?</a> </label>
                </div>
              </div>
              <div class="form-row-last">
                <button className='register'>
                  <span>Đăng Nhập</span>
                </button>
                <p>Bạn chưa có tài khoản? <a href="./sign-up">Đăng ký</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
