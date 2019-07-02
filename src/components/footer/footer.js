import React, { Component } from "react";
import "./footer.scss";
import icFb from "../../assets/img/icFB.png";
import icSkype from "../../assets/img/icSkype.png";
import icYoutube from "../../assets/img/icYtbe.png";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer-box">
          <div className="footer">
            <div className="footer-item">
              <div className="item-header">TƯ VẤN PHÁI SINH</div>
              <hr />
              <a href="/consulting-securities" className="item-content">
                Robo advisor
              </a>
              <a href="/consulting-securities" className="item-content">
                Tư vấn trực tuyến
              </a>
              <a href="/about-us" className="item-content">
                Đội ngũ chuyên gia
              </a>
            </div>
            <div className="footer-item">
              <div className="item-header">ĐÀO TẠO CHỨNG KHOÁN</div>
              <hr />
              <a href="/training-service" className="item-content">
                Danh sách khóa học
              </a>
              <a href="/training-service" className="item-content">
                Khóa học khai giảng
              </a>
            </div>
            <div className="footer-item">
              <div className="item-header">FORUM TRADER</div>
              <hr />
              <a href="/mbs-co-phieu" className="item-content icSky">
                Room 1
              </a>
              <a href="/mbs-phai-sinh" className="item-content icSky">
                Room 2
              </a>
              <a href="/mbs-chung-quyen" className="item-content icTele">
                Telegram
              </a>
            </div>
            <div className="footer-item">
              <div className="item-header">HỖ TRỢ</div>
              <hr />
              <a href="/faqs" className="item-content">
                FAQs
              </a>
              <a href="/yeu-cau-chuyen-doi" className="item-content">
                Chuyển đổi phục vụ
              </a>
              <a href="/terms-of-use" className="item-content">
                Điều khoản sử dụng
              </a>
            </div>
            <div className="footer-item">
              <div className="item-header">LIÊN HỆ</div>
              <hr />
              <span className="item-content">CÔNG TY CP CHỨNG KHOÁN MB</span>
              <p>
                <span>Hội Sở: </span>Tòa nhà MB - Số 3 Liễu Giai,<br></br> Quận
                Ba Đình, Hà Nội.
              </p>
              <p>
                Tel: <span>+84 24 3726 2600</span> Máy lẻ: <span>1001</span>
              </p>
              <p>
                Fax: <span>+84 24 3726 2601</span>
              </p>
              <p>
                Hotline MBS: <span>+84 24 3755 6688</span>
              </p>
            </div>
            <div className="footer-item">
              <div className="item-header">SOCIAL MEDIA</div>
              <hr />
              <a href="https://facebook.com.vn" className="item-icon">
                <img src={icFb} alt="facebook" />
              </a>
              <a href="/skype" className="item-icon">
                <img src={icSkype} alt="skype" />
              </a>
              <a href="https://youtube.com.vn" className="item-icon">
                <img src={icYoutube} alt="youtube" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyrights">
          Copyrights 2000 - 2019 MBS, thành viên của Tập đoàn MB.
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
