import React, { Component } from "react";
import "./contactBox.scss";

export default class ContactBox extends Component {
  render() {
    return (
      <div className="contact-box">
        <div className="info-box">
          <div className="contact-title">PHÒNG DỊCH VỤ KHÁCH HÀNG ONLINE</div>
          <div className="info-content">
            <i className="fas fa-map-marker-alt"></i>
            <span className="info-address">
              Số 3 Liễu Giai, Quận Ba Đình, Hà Nội
            </span>
          </div>
          <div className="info-content">
            <i className="fas fa-phone"></i>
            <span className="info-hotline">1900 9088</span>
          </div>
          <div className="info-content">
            <i className="fas fa-envelope"></i>
            <span className="info-email">cskh@mbs.com.vn</span>
          </div>
        </div>
        <div className="msg-box">
          <div className="contact-title">GỬI LỜI NHẮN</div>
          <input
            className="form-control msg-text"
            type="text"
            placeholder="Họ và tên *"
          />
          <input
            className="form-control msg-text"
            type="text"
            placeholder="Điện thoại *"
          />
          <input
            className="form-control msg-text"
            type="text"
            placeholder="Email *"
          />
          <textarea
            className="form-control msg-text"
            rows="3"
            placeholder="Nội dung *"
          />

          <button className="btn btn-send-msg">
            <i className="fas fa-paper-plane"></i>
            GỬI
          </button>
        </div>
      </div>
    );
  }
}
