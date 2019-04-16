import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './headerTop.scss';

class HeaderTop extends Component {

  render(){
    const { t } = this.props;
    return(
      <div className='header-top'>
        <div className='menu-top'>
          <div className='menu-top-left'></div>
          <div className='menu-top-limit'>
            <a href="">D24</a>
            <div className='col-separator' />
            <a href="">{t('bang-gia')}</a>
            <div className='col-separator' />
            <a href="">{t('do-thi-ky-thuat')}</a>
            <div className='col-separator' />
            <a href="">Stock24</a>
          </div>
        </div>
        <div className='register-top'>
          <div className='register-top-limit'>
            <span id='guide-register-text'>Bạn có <a>TÀI KHOẢN</a> giao dịch <a>CHỨNG KHOÁN</a> chưa?</span>
            <button className='btn btn-register'><i className="far fa-user"></i>Mở tài khoản</button>
            <button className='btn btn-login'><i className="fas fa-unlock-alt"></i>Đăng nhập</button>
          </div>
        </div>
      </div>
    )
  }
}
export default withTranslation()(HeaderTop);