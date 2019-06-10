import React, { Component } from 'react';
import Layout from '../layout/layout';
import './createTradingAccount.scss';
import icCapcha from '../../assets/img/Capcha.jpg';
import { NATIONALITY, TYPE_AUTHEN } from '../../utils/constant';

export default class CreateTradingAccount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      phoneNumber: '',
      email: '',
      accountNumber: '',
      nationality: '',
      nationalityOther: '',
      sex: 1,
      dateBirth: '',
      typeAuthen: 1,      //loại giấy tờ chứng thực
      numberAuthen: '',   //số giấy tờ chứng thực
      dateRange: '',      //ngày cấp
      issueBy: '',        //nơi cấp
      permanentAddress: '',
      permanentCity: '',
      permanentDistrict: '',
      currentAddress: '',
      currentCity: '',
      currentDistrict: '',
      accountType: 3
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeGender = (gender) => {
    this.setState({
      sex: gender
    })
  }
  onChangeTypeAuthen = (type) => {
    this.setState({
      typeAuthen: type
    })
  }

  onSelectNational = (e) => {
    this.setState({
      [e.target.name]: NATIONALITY[e.target.selectedIndex].id
    })
  }

  render() {
    const {
      name,
      phoneNumber,
      email,
      accountNumber,
      nationality,
      nationalityOther,
      sex,
      dateBirth,
      typeAuthen,
      numberAuthen,
      dateRange,
      issueBy,
      permanentAddress,
      permanentCity,
      permanentDistrict,
      currentAddress,
      currentCity,
      currentDistrict,
      accountType
    } = this.state;
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
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span>Họ và tên ( <i className="txtRed">*</i> ) : </span>
                      <input type="text" className="form-control" placeholder="Họ và tên"
                        name="name" value={name} onChange={this.onChange}/>
                    </div>
                    <div className="form-wrapper">
                      <span>Giới tính : </span>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="male" value={sex} checked={sex === 1 ? true : false}
                            tabIndex="0" className="hidden" onChange={e => this.onChangeGender(1)}/>
                          <label>Nam</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input type="radio" name="female" value={sex} checked={sex === 0 ? true : false}
                            tabIndex="0" className="hidden" onChange={e => this.onChangeGender(0)}/>
                          <label>Nữ</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span htmlFor="">Ngày sinh ( <i className="txtRed">*</i> ) : </span>
                      <div className="lnr lnr-calendar-full"></div>
                      <input type="text" className="form-control datepicker-here" data-language='en'
                        data-date-format="dd-mm-yyyy" id="dp1" name="dateBirth" onChange={this.onChange}/>
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Quốc tịch :</span>
                      <select name="nationality" id="nationality" className="form-control" onChange={this.onSelectNational}>
                        {
                          NATIONALITY.map((item, index ) => {
                            return <option key={index} value={item.id}>{item.name}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper">
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Quốc tịch khác (nếu có) :</span>
                      <select name="nationalityOther" id="nationalityOther" className="form-control"
                        onChange={this.onSelectNational}>
                        {
                          NATIONALITY.map((item, index ) => {
                            return <option key={index} value={item.id}>{item.name}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper flb_100 opVeri">
                      <span>Giấy tờ chứng thực cá nhân ( <i className="txtRed">*</i> ) : </span>
                      <div className='optionVerDocs'>
                        {
                          TYPE_AUTHEN.map((item, index) => {
                            return <div className="field" key={index}>
                              <div className="ui radio checkbox checked">
                                <input type="radio" name="frequency" checked="checked" tabIndex={index}
                                  className="hidden" checked={typeAuthen === item.id ? true: false}
                                  onChange={e => this.onChangeTypeAuthen(item.id)}/>
                                <label>{item.name}</label>
                              </div>
                            </div>
                          })
                        }
                      </div>
                    </div>
                    </div>
                    <div className="form-row">
                      <div className="form-wrapper">
                        <span>Số ( <i className="txtRed">*</i> ) : </span>
                        <input type="text" className="form-control" placeholder="Số ..."
                          value={numberAuthen} name="numberAuthen" onChange={this.onChange}/>
                      </div>
                      <div className="form-wrapper">
                        <span htmlFor="">Ngày cấp : </span>
                        <div className="lnr lnr-calendar-full"></div>
                        <input type="text" className="form-control datepicker-here" data-language='en'
                          data-date-format="dd-mm-yyyy" id="dp1" name="dateRange" onChange={this.onChange}/>
                      </div>                      
                    </div>
                    <div className="form-row">
                    <div className="form-wrapper flb_100">
                        <span>Nơi cấp ( <i className="txtRed">*</i> ) : </span>
                        <input type="text" className="form-control" placeholder="Nơi cấp ..."
                          value={issueBy} name="issueBy" onChange={this.onChange}/>
                    </div>
                    </div>
                  </div>
                  <div className='header_content_form'>
                  II. Thông tin liên lạc
                  </div>
                  <div className='body_content_form'>
                      <div className="form-row">
                        <div className="form-wrapper">
                          <span htmlFor="">Địa chỉ thường trú  ( <i className="txtRed">*</i> ) : </span>
                          <input type="text" className="form-control" placeholder="Địa chỉ thường trú"
                            value={permanentAddress} name="permanentAddress" onChange={this.onChange}/>
                        </div>
                        <div className="form-wrapper">
                          <select name="" id="" className="form-control filterProv">
                            <option value="0">Tỉnh / Thành phố</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                          <select name="" id="" className="form-control filterDis">
                            <option value="0">Quận / Huyện</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-wrapper">
                          <span htmlFor="">Địa chỉ hiện tại/ Liên lạc ( <i className="txtRed">*</i> ) : </span>
                          <input type="text" className="form-control" placeholder="Địa chỉ hiện tại/ Liên lạc"
                            value={currentAddress} name="currentAddress" onChange={this.onChange}/>
                        </div>
                        <div className="form-wrapper">
                          <select name="" id="" className="form-control filterProv">
                            <option value="0">Tỉnh / Thành phố</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                          <select name="" id="" className="form-control filterDis">
                            <option value="0">Quận / Huyện</option>
                            <option value="1">Bà Rịa - Vũng Tàu</option>
                            <option value="2">Hà Nội</option>
                            <option value="3">Tp.Hồ Chí Minh</option>
                            <option value="4">Hải Phòng</option>
                            <option value="5">Đà Nẵng</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-wrapper">
                          <span htmlFor="">Điện thoại di động ( <i className="txtRed">*</i> ) : </span>
                          <input type="text" className="form-control" placeholder="Địa chỉ thường trú"
                            name="phoneNumber" value={phoneNumber} onChange={this.onChange}/>
                        </div>
                        <div className="form-wrapper">
                          <span htmlFor="">Email ( <i className="txtRed">*</i> ): </span>
                          <input type="text" className="form-control" placeholder="Email"
                            name="email" value={email} onChange={this.onChange}/>
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
                      <div className="form-row">
                        <div className="form-wrapper">
                          <div className="form-group">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="gridCheck"/>
                              <label className="form-check-label" htmlFor="gridCheck">
                              Cổ phiếu, trái phiếu, chứng quyền có bảo đảm
                              </label>
                            </div>
                        </div>
                        </div>
                        <div className="form-wrapper">

                        </div>
                      </div>
                    <div className="form-row">
                        <div className="form-wrapper">
                          <div className="form-group">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                Hợp đồng tương lai
                                </label>
                            </div>
                        </div>
                        </div>
                        <div className="form-wrapper vldSTK">
                          <span htmlFor="validationSTK">Số tài khoản tại MBS ( <i className="txtRed">*</i> ): </span>
                            <input type="text" className="form-control is-invalid" placeholder="Số tài khoản tại MBS ..."
                              id="validationSTK" required name="accountNumber" value={accountNumber} onChange={this.onChange}/>
                            <div className="invalid-feedback">
                            Nhập số tài khoản (6 kí tự không bao gồm "011C").
                            </div>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="form-row ">
                          <div className="form-wrapper flb_100 justify-content-center flex-column">
                            <div className="form-group">
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                  <label className="form-check-label" htmlFor="gridCheck">
                                  Tôi đồng ý với <i className='txtBlue'>Điều khoản và Điều kiện Mở tài khoản Giao dịch Chứng khoán</i>
                                  </label>
                              </div>
                          </div> 
                          <div><img alt='img-capcha' src={icCapcha}></img></div>                         
                          <button className="btn btn_continue mt15">Tiếp tục</button>
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