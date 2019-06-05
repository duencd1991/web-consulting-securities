import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './headerTop.scss';

class HeaderTop extends Component {

  render(){
    const { t } = this.props;
    return(
      <div className='header-top'>
        <div className='menu-top-limit'>
          <a href="https://d24.mbs.com.vn">D24</a>
          <div className='col-separator' />
          <a href="https://banggia.mbs.com.vn/v2">{t('bang-gia')}</a>
          <div className='col-separator' />
          <a href="https://banggia.mbs.com.vn/ptktsc">{t('do-thi-ky-thuat')}</a>
          <div className='col-separator' />
          <a href="https://stock24.mbs.com.vn">Stock24</a>
        </div>
        <div className='register-top-limit'>
          <span id='guide-register-text'>Bạn có <span>TÀI KHOẢN</span> giao dịch <span>CHỨNG KHOÁN</span> chưa?</span>
          <div className='listBtn'>
            <a className='btn btn-register' href='/create-trading-account'><i className="far ic_account"></i>Mở tài khoản</a>
            <a className='btn btn-login' href='/sign-in'><i className="fas ic_unlock"></i>Đăng nhập</a>
          </div>
          </div>
      </div>
    )
  }
}
export default withTranslation()(HeaderTop);