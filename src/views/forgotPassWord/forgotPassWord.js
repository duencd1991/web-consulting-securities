import React, { Component } from 'react';
import '../signIn/signIn.scss';
import '../forgotPassWord/forgotPassWord.scss';
import imgBgLeft from '../../assets/img/bg_SignIn.jpg';
import logoMbs from '../../assets/img/logo-blue.png';

export default class signIn extends Component {
    render() {
      return (
        <div className='signin_page fgp_page'>
          <div className='contentForm'>
            <div className='leftF'>
              <img src={imgBgLeft} alt="Đăng nhập" />
              <div className='titleSignin top14'>Quên mật khẩu</div>
              <div class="checkTKCK"><a href="/" alt="Trang chủ" className='logo'><img src={logoMbs}/></a>
              <p className="copyRight">Copyrights 2000 - 2019 MBS.</p>
              </div>
            </div>
            <div className='rightF'>
              <form class="form-detail" action="#" method="post" id="myform">
                <div class="form-row">
                  <label for="your_email">Tên đăng nhập/E-MAIL</label>
                  <input type="text" name="your_email" id="your_email" class="input-text" placeholder="Nhập lại tên/email của bạn" onfocus="this.placeholder = ''"
onblur="this.placeholder = 'Nhập lại tên/email của bạn'" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
                </div>
                <div class="form-row-last">
                  <a className='register' href='./get-pass-word'>
                    <span>Xác nhận</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }