import React, { Component } from 'react';
import './footer.scss';
import icFb from '../../assets/img/icFB.png';
import icSkype from '../../assets/img/icSkype.png';
import icYoutube from '../../assets/img/icYtbe.png';

class Footer extends Component {
  
  render() {
    return(
      <React.Fragment>
        <div className='footer-box'>
          <div className='footer'>
            <div className='footer-item'>
              <div className='item-header'>ĐÀO TẠO CHỨNG KHOÁN</div>
              <hr />
              <a href="#" className='item-content'>Các khóa học</a>
              <a href="#" className='item-content'>Chuẩn bị khai giảng</a>
              <a href="#" className='item-content'>Đăng ký</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>TƯ VẤN ĐẦU TƯ</div>
              <hr />
              <a href="#" className='item-content'>Đội ngũ chuyên gia</a>
              <a href="#" className='item-content'>Gói tư vấn</a>
              <a href="#" className='item-content'>Đăng ký</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>HƯỚNG DẪN TỰ GIAO DỊCH</div>
              <hr />
              <a href="#" className='item-content'>MBS Cổ phiếu</a>
              <a href="#" className='item-content'>MBS Phái sinh - HĐTL</a>
              <a href="#" className='item-content'>MBS Chứng quyền có bảo đảm</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>HỖ TRỢ</div>
              <hr />
              <a href="#" className='item-content'>Hotline 1900 9088</a>
              <a href="#" className='item-content'>FAQs</a>
              <a href="#" className='item-content'>Yêu cầu chuyển đổi</a>
              <a href="#" className='item-content'>Loại hình phục vụ</a>
              <a href="#" className='item-content'></a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>VỀ MBS</div>
              <hr />
              <a href="#" className='item-content'>Giới thiệu</a>
              <a href="#" className='item-content'>Tuyển dụng</a>
              <a href="#" className='item-content'>Điều khoản sử dụng</a>
              <a href="#" className='item-content'>Liên hệ</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>SOCIAL MEDIA</div>
              <hr />
              <a href="#" className='item-icon'>
                <img src={icFb} alt="facebook"/>
              </a>
              <a href="#" className='item-icon'>
                <img src={icSkype} alt="skype"/>
              </a>
              <a href="#" className='item-icon'>
                <img src={icYoutube} alt="youtube"/>
              </a>
            </div>
          </div>
        </div>
        <div className='footer-copyrights'>
          Copyrights 2000 - 2019 MBS, thành viên của Tập đoàn MB
        </div>
      </React.Fragment>
      
    );
  }
}

export default Footer;