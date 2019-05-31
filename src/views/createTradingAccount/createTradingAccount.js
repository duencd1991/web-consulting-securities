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
                      <span>Họ và tên ( <i class="txtRed">*</i> ) : </span>
                      <input type="text" class="form-control" placeholder="Họ và tên"/>
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
                      <span for="">Ngày sinh ( <i class="txtRed">*</i> ) : </span>
                      <div class="lnr lnr-calendar-full"></div>
                      <input type="text" class="form-control datepicker-here" data-language='en' data-date-format="dd M yyyy" id="dp1"/>
                    </div>
                    <div class="form-wrapper">
                      <span for="">Quốc tịch :</span>
                      <select name="" id="" class="form-control">
                        <option value="1">Việt Nam</option>
                        <option value="2">Hàn Quốc</option>
                        <option value="3">Nhật Bản</option>
                        <option value="4">Trung Quốc</option>
                        <option value="5">Phillipin</option>
                        <option value="6">Singapo</option>
                      </select>
                      {/* <i class="fas fa-sort-down"></i> */}
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-wrapper">
                    </div>
                    <div class="form-wrapper">
                      <span for="">Quốc tịch khác (nếu có) :</span>
                      <select name="" id="" class="form-control">
                        <option value="1">Việt Nam</option>
                        <option value="2">Hàn Quốc</option>
                        <option value="3">Nhật Bản</option>
                        <option value="4">Trung Quốc</option>
                        <option value="5">Phillipin</option>
                        <option value="6">Singapo</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-wrapper flb_100 opVeri">
                    <span>Giấy tờ chứng thực cá nhân ( <i class="txtRed">*</i> ) : </span>
                        <div className='optionVerDocs'>
                            <div class="field">
                              <div class="ui radio checkbox checked">
                                <input type="radio" name="frequency" checked="checked" tabindex="0" class="hidden"/>
                                <label>Giấy CMND</label>
                              </div>
                            </div>
                            <div class="field">
                              <div class="ui radio checkbox">
                                <input type="radio" name="frequency" tabindex="0" class="hidden"/>
                                <label>Thẻ căng cước công dân</label>
                              </div>
                            </div>
                            <div class="field">
                              <div class="ui radio checkbox">
                                <input type="radio" name="frequency" tabindex="0" class="hidden"/>
                                <label>Khác</label>
                              </div>
                              <div className='otherDocs'>
                                <input type="text" class="form-control" placeholder="..."/>
                              </div>
                            </div>
                          </div>
                    </div>
                    </div>
                    <div class="form-row">
                      <div class="form-wrapper">
                        <span>Số ( <i class="txtRed">*</i> ) : </span>
                        <input type="text" class="form-control" placeholder="Số ..."/>
                      </div>
                      <div class="form-wrapper">
                        <span for="">Ngày cấp : </span>
                        <div class="lnr lnr-calendar-full"></div>
                        <input type="text" class="form-control datepicker-here" data-language='en' data-date-format="dd M yyyy" id="dp1"/>
                      </div>                      
                    </div>
                    <div class="form-row">
                    <div class="form-wrapper flb_100">
                        <span>Nơi cấp ( <i class="txtRed">*</i> ) : </span>
                        <input type="text" class="form-control" placeholder="Nơi cấp ..."/>
                    </div>
                    </div>
                  </div>
                  <div className='header_content_form'>
                  II. Thông tin liên lạc
                  </div>
                  <div className='body_content_form'>
                      <div class="form-row">
                        <div class="form-wrapper">
                          <span for="">Địa chỉ thường trú  ( <i class="txtRed">*</i> ) : </span>
                          <input type="text" class="form-control" placeholder="Địa chỉ thường trú"/>
                        </div>
                        <div class="form-wrapper">
                          <select name="" id="" class="form-control filterProv">
                            <option value="0">Tỉnh / Thành phố</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                          <select name="" id="" class="form-control filterDis">
                            <option value="0">Quận / Huyện</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-wrapper">
                          <span for="">Địa chỉ hiện tại/ Liên lạc ( <i class="txtRed">*</i> ) : </span>
                          <input type="text" class="form-control" placeholder="Địa chỉ hiện tại/ Liên lạc"/>
                        </div>
                        <div class="form-wrapper">
                          <select name="" id="" class="form-control filterProv">
                            <option value="0">Tỉnh / Thành phố</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                          <select name="" id="" class="form-control filterDis">
                            <option value="0">Quận / Huyện</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="form-wrapper">
                          <span for="">Điện thoại di động ( <i class="txtRed">*</i> ) : </span>
                          <input type="text" class="form-control" placeholder="Địa chỉ thường trú"/>
                        </div>
                        <div class="form-wrapper">
                          <span for="">Email ( <i class="txtRed">*</i> ): </span>
                          <input type="text" class="form-control" placeholder="Email"/>
                        </div>
                      </div>
                  </div>
                  <div className='header_content_form'>
                  III. Loại tài khoản chứng khoán muốn mở ? <span className='txtRed'>* </span>
                  </div>
                  <div className='body_content_form'>
                    <p className='m15'>Nếu khách hàng muốn mở tài khoản chứng khoán phái sinh nhưng chưa có tài khoản chứng khoán cơ sở, vui lòng đánh dấu vào cả 2 ô.<br/>
                      <span className='txtRed'>Chọn loại tài khoản chứng khoán muốn mở?</span> 
                    </p>
                      <div class="form-row">
                        <div class="form-wrapper">
                          <div class="form-group">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck"/>
                              <label class="form-check-label" for="gridCheck">
                              Cổ phiếu, trái phiếu, chứng quyền có bảo đảm
                              </label>
                            </div>
                        </div>
                        </div>
                        <div class="form-wrapper">

                        </div>
                      </div>
                    <div class="form-row">
                        <div class="form-wrapper">
                          <div class="form-group">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                <label class="form-check-label" for="gridCheck">
                                Hợp đồng tương lai
                                </label>
                            </div>
                        </div>
                        </div>
                        <div class="form-wrapper vldSTK">
                          <span for="validationSTK">Số tài khoản tại MBS ( <i class="txtRed">*</i> ): </span>
                            <input type="text" class="form-control is-invalid" placeholder="Số tài khoản tại MBS ..." id="validationSTK" required/>
                            <div class="invalid-feedback">
                            Nhập số tài khoản (6 kí tự không bao gồm "011C").
                            </div>
                        </div>
                      </div>
                      <hr></hr>
                      <div class="form-row ">
                          <div class="form-wrapper flb_100 justify-content-center flex-column">
                            <div class="form-group">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                                  <label class="form-check-label" for="gridCheck">
                                  Tôi đồng ý với <i className='txtBlue'>Điều khoản và Điều kiện Mở tài khoản Giao dịch Chứng khoán</i>
                                  </label>
                              </div>
                          </div> 
                          <div><img src="../assets/img/Capcha.jpg"></img></div>                         
                          <button class="btn btn_continue mt15">Tiếp tục</button>
                          </div>
                      </div>
                    </div>
                  
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}