import React, { Component } from 'react';
import '../signIn/signIn.scss';
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
                    <label for="password">Mật khẩu mới</label>
                    <input type="password" name="password" id="password" class="input-text" required />
                </div>
                <div class="form-row">
                    <label for="comfirm_password">Nhập lại mật khẩu</label>
                    <input type="password" name="comfirm_password" id="comfirm_password" class="input-text" required />
                </div>
                <div class="form-row-last">
                  <a className='register' href='./get-pass-word'>
                    <span>Hoàn tất</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }