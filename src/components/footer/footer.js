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
              <a href="/cac-khoa-hoc" className='item-content'>Các khóa học</a>
              <a href="/chuan-bi-khai-giang" className='item-content'>Chuẩn bị khai giảng</a>
              <a href="/dang-ky" className='item-content'>Đăng ký</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>TƯ VẤN ĐẦU TƯ</div>
              <hr />
              <a href="/doi-ngu-chuyen-gia" className='item-content'>Đội ngũ chuyên gia</a>
              <a href="/goi-tu-van" className='item-content'>Gói tư vấn</a>
              <a href="/dang-ky" className='item-content'>Đăng ký</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>HƯỚNG DẪN TỰ GIAO DỊCH</div>
              <hr />
              <a href="/mbs-co-phieu" className='item-content'>MBS Cổ phiếu</a>
              <a href="/mbs-phai-sinh" className='item-content'>MBS Phái sinh - HĐTL</a>
              <a href="/mbs-chung-quyen" className='item-content'>MBS Chứng quyền có bảo đảm</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>HỖ TRỢ</div>
              <hr />
              <a href="/hot-line" className='item-content'>Hotline 1900 9088</a>
              <a href="/faqs" className='item-content'>FAQs</a>
              <a href="/yeu-cau-chuyen-doi" className='item-content'>Yêu cầu chuyển đổi</a>
              <a href="/loai-hinh-phuc-vu" className='item-content'>Loại hình phục vụ</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>VỀ MBS</div>
              <hr />
              <a href="/gioi-thieu" className='item-content'>Giới thiệu</a>
              <a href="/tuyen-dung" className='item-content'>Tuyển dụng</a>
              <a href="/dieu-khoan-su-dung" className='item-content'>Điều khoản sử dụng</a>
              <a href="/lien-he" className='item-content'>Liên hệ</a>
            </div>
            <div className='footer-item'>
              <div className='item-header'>SOCIAL MEDIA</div>
              <hr />
              <a href="https://facebook.com.vn" className='item-icon'>
                <img src={icFb} alt="facebook"/>
              </a>
              <a href="/skype" className='item-icon'>
                <img src={icSkype} alt="skype"/>
              </a>
              <a href="https://youtube.com.vn" className='item-icon'>
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