import React, { Component } from 'react';
import Layout from '../layout/layout';
import './createTradingAccount.scss';


export default class CreateTradingAccount extends Component {
  render() {
    return(
      <Layout>
        <div className='create-trading-account-page'>
          <div className='ctaccount_banner'>
            <h3><strong>đăng ký</strong> mở tài khoản giao dịch chứng khoán</h3>
          </div>
          <div className='ctaccount_content'>
            <div className='header_title'>
              <div className='ctaccount_title'>Thông tin chủ tài khoản</div>
              <hr />
            </div>
            <div className='main_form'>
              <div className='heading_form'>
              Khách hàng điền thông tin để đăng ký mở tài khoản tại đây.  Hotline hỗ trợ đăng ký mở tài khoản: <span className='txtC'>1900 9088</span>
              </div>
              <div className='content_form'>
                  <h4><i className='note'>* Lưu ý:</i> Khách hàng điền thông tin bằng tiếng Việt, có đủ dấu.</h4>
                  <div className='header_content_form'>
                  I. Thông tin chủ tài khoản (Khách Hàng)
                  </div>
                  <div className='body_content_form'>
                  <div class="form-row">
                    <div class="form-wrapper">
                      <span>Họ và tên ( * ) : </span>
                      <input type="text" class="form-control" placeholder="Your Name"/>
                    </div>
                    <div class="form-wrapper">
                          <span>Giới tính : </span>
                          <div class="field">
                            <div class="ui radio checkbox checked">
                              <input type="radio" name="frequency" checked="checked" tabindex="0" class="hidden"/>
                              <label>Nam</label>
                            </div>
                          </div>
                          <div class="field">
                            <div class="ui radio checkbox">
                              <input type="radio" name="frequency" tabindex="0" class="hidden"/>
                              <label>Nữ</label>
                            </div>
                          </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-wrapper">
                      <span for="">Ngày sinh ( * ) : </span>
                      <div class="lnr lnr-calendar-full"></div>
                      <input type="text" class="form-control datepicker-here" data-language='en' data-date-format="dd M yyyy" id="dp1"/>
                    </div>
                    <div class="form-wrapper">
                      <span for="">Quốc tịch :</span>
                      {/* <span class="lnr lnr-calendar-full"></span> */}
                      <input type="text" class="form-control datepicker-here" data-language='en'  data-date-format="dd M yyyy" id="dp2"/>
                    </div>
                  </div>
                  </div>
                  <div className='header_content_form'>
                  II. Thông tin liên lạc
                  </div>
                  <div className='header_content_form'>
                  III. Loại tài khoản chứng khoán muốn mở ? <span className='txtRed'>* </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}