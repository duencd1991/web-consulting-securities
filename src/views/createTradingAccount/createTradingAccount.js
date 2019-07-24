import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "../layout/layout";
import "./createTradingAccount.scss";
import icCapcha from "../../assets/img/Capcha.jpg";
import { NATIONALITY, TYPE_AUTHEN } from "../../utils/constant";
import { toast } from "react-toastify";
import actions from "../../store/accountTrading/actions";
import notifyActions from "../../store/notification/actions";

class CreateTradingAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      accountNumber: "",
      nationality: "",
      nationalityOther: "",
      sex: 1,
      dateBirth: "",
      typeAuthen: 1, //loại giấy tờ chứng thực
      numberAuthen: "", //số giấy tờ chứng thực
      dateRange: "", //ngày cấp
      issueBy: "", //nơi cấp
      permanentAddress: "",
      permanentCity: "",
      permanentDistrict: "",
      currentAddress: "",
      currentCity: "",
      currentDistrict: "",
      accountType: 3,

      accountType1: false,
      accountType2: false,
      agreement: false,
      validate: true
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      nextState.accountType1 !== this.state.accountType1 ||
      nextState.accountType2 !== this.state.accountType2
    ) {
      let accountType = 0;
      if (nextState.accountType1 && nextState.accountType2) {
        accountType = 3;
      } else if (nextState.accountType1 && !nextState.accountType2) {
        accountType = 1;
      } else if (!nextState.accountType1 && nextState.accountType2) {
        accountType = 2;
      }
      this.setState({
        accountType: accountType
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      this.props.clearNotify();
    }
  }

  onCheckBoxChange = e => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onChangeDate = e => {
    if (e.target.value) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  onChangeGender = gender => {
    this.setState({
      sex: gender
    });
  };
  onChangeTypeAuthen = type => {
    this.setState({
      typeAuthen: type
    });
  };

  onSelectNational = e => {
    this.setState({
      [e.target.name]: NATIONALITY[e.target.selectedIndex].id
    });
  };

  validateForm = () => {
    const {
      name,
      dateBirth,
      numberAuthen,
      dateRange,
      issueBy,
      permanentAddress,
      // permanentCity,
      // permanentDistrict,
      currentAddress,
      // currentCity,
      // currentDistrict,
      phoneNumber,
      email,
      accountNumber
    } = this.state;
    const check =
      name !== "" &&
      dateBirth !== "" &&
      numberAuthen !== "" &&
      dateRange !== "" &&
      issueBy !== "" &&
      permanentAddress !== "" &&
      currentAddress !== "" &&
      phoneNumber !== "" &&
      email !== ""
      //&& accountNumber !== "";
    this.setState({
      validate: check
    });
    return check;
  };
  handleSubmit = () => {
    if (this.validateForm()) {
      const state = this.state;
      const data = {
        name: state.name,
        phoneNumber: state.phoneNumber,
        email: state.email,
        accountNumber: state.accountNumber,
        nationality: state.nationality,
        nationalityOther: state.nationalityOther,
        sex: state.sex,
        dateBirth: state.dateBirth,
        typeAuthen: state.typeAuthen,
        numberAuthen: state.numberAuthen,
        dateRange: state.dateRange,
        issueBy: state.issueBy,
        permanentAddress: state.permanentAddress,
        permanentCity: state.permanentCity,
        permanentDistrict: state.permanentDistrict,
        currentAddress: state.currentAddress,
        currentCity: state.currentCity,
        currentDistrict: state.currentDistrict,
        accountType: state.accountType
      };
      this.props.createAccountTrading(data);
    }
  };

  render() {
    const {
      name,
      phoneNumber,
      email,
      accountNumber,
      // nationality,
      // nationalityOther,
      sex,
      // dateBirth,
      typeAuthen,
      numberAuthen,
      // dateRange,
      issueBy,
      permanentAddress,
      // permanentCity,
      // permanentDistrict,
      currentAddress,
      // currentCity,
      // currentDistrict,
      // accountType,
      // accountType1,
      // accountType2,
      agreement,
      validate
    } = this.state;
    return (
      <Layout>
        <div className="create-trading-account-page">
          <div className="ctaccount_banner">
            <h3>
              <strong>đăng ký</strong> mở tài khoản giao dịch chứng khoán
            </h3>
          </div>
          <div className="ctaccount_content">
            <div className="header_title">
              <div className="ctaccount_title">Thông tin chủ tài khoản</div>
              <hr />
            </div>
            <div className="main_form">
              <div className="heading_form">
                Khách hàng điền thông tin để đăng ký mở tài khoản tại đây.
                Hotline hỗ trợ đăng ký mở tài khoản:{" "}
                <span className="txtC">1900 9088</span>
              </div>
              <div className="content_form">
                <h4>
                  <i className="note">* Lưu ý:</i> Khách hàng điền thông tin
                  bằng tiếng Việt, có đủ dấu.
                </h4>
                <div className="header_content_form">
                  I. Thông tin chủ tài khoản (Khách Hàng)
                </div>
                <div className="body_content_form">
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span>
                        Họ và tên ( <i className="txtRed">*</i> ) :{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Họ và tên"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-wrapper">
                      <span>Giới tính : </span>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name="male"
                            value={sex}
                            checked={sex === 1 ? true : false}
                            tabIndex="0"
                            className="hidden"
                            onChange={e => this.onChangeGender(1)}
                          />
                          <label>Nam</label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui radio checkbox">
                          <input
                            type="radio"
                            name="female"
                            value={sex}
                            checked={sex === 0 ? true : false}
                            tabIndex="0"
                            className="hidden"
                            onChange={e => this.onChangeGender(0)}
                          />
                          <label>Nữ</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span htmlFor="">
                        Ngày sinh ( <i className="txtRed">*</i> ) :{" "}
                      </span>
                      <div className="lnr lnr-calendar-full"></div>
                      <input
                        type="text"
                        className="form-control datepicker-here"
                        data-language="en"
                        data-date-format="dd-mm-yyyy"
                        id="dp1"
                        name="dateBirth"
                        onBlur={this.onChangeDate}
                      />
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Quốc tịch :</span>
                      <select
                        name="nationality"
                        id="nationality"
                        className="form-control"
                        onChange={this.onSelectNational}
                      >
                        {NATIONALITY.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper"></div>
                    <div className="form-wrapper">
                      <span htmlFor="">Quốc tịch khác (nếu có) :</span>
                      <select
                        name="nationalityOther"
                        id="nationalityOther"
                        className="form-control"
                        onChange={this.onSelectNational}
                      >
                        {NATIONALITY.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper flb_100 opVeri">
                      <span>
                        Giấy tờ chứng thực cá nhân ( <i className="txtRed">*</i>{" "}
                        ) :{" "}
                      </span>
                      <div className="optionVerDocs">
                        {TYPE_AUTHEN.map((item, index) => {
                          return (
                            <div className="field" key={index}>
                              <div className="ui radio checkbox checked">
                                <input
                                  type="radio"
                                  name="frequency"
                                  tabIndex={index}
                                  className="hidden"
                                  checked={
                                    typeAuthen === item.id ? true : false
                                  }
                                  onChange={e =>
                                    this.onChangeTypeAuthen(item.id)
                                  }
                                />
                                <label>{item.name}</label>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span>
                        Số ( <i className="txtRed">*</i> ) :{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Số ..."
                        value={numberAuthen}
                        name="numberAuthen"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Ngày cấp : </span>
                      <div className="lnr lnr-calendar-full"></div>
                      <input
                        type="text"
                        className="form-control datepicker-here"
                        data-language="en"
                        data-date-format="dd-mm-yyyy"
                        id="dp1"
                        name="dateRange"
                        onBlur={this.onChangeDate}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper flb_100">
                      <span>
                        Nơi cấp ( <i className="txtRed">*</i> ) :{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nơi cấp ..."
                        value={issueBy}
                        name="issueBy"
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="header_content_form">
                  II. Thông tin liên lạc
                </div>
                <div className="body_content_form">
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span htmlFor="">
                        Địa chỉ thường trú ( <i className="txtRed">*</i> ) :{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Địa chỉ thường trú"
                        value={permanentAddress}
                        name="permanentAddress"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Tỉnh / Thành phố</span>
                      <select
                        name="permanentCity"
                        id="permanentCity"
                        className="form-control"
                        onChange={this.onSelectNational}
                      >
                        {NATIONALITY.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Quận / Huyện</span>
                      <select
                        name="permanentDistrict"
                        id="permanentDistrict"
                        className="form-control"
                        onChange={this.onSelectNational}
                      >
                        {NATIONALITY.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span htmlFor="">
                        Địa chỉ hiện tại/ Liên lạc ( <i className="txtRed">*</i>{" "}
                        ) :{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Địa chỉ hiện tại/ Liên lạc"
                        value={currentAddress}
                        name="currentAddress"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Tỉnh / Thành phố</span>
                      <select
                        name="currentCity"
                        id="currentCity"
                        className="form-control"
                        onChange={this.onSelectNational}
                      >
                        {NATIONALITY.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">Quận / Huyện</span>
                      <select
                        name="currentDistrict"
                        id="currentDistrict"
                        className="form-control"
                        onChange={this.onSelectNational}
                      >
                        {NATIONALITY.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper">
                      <span htmlFor="">
                        Điện thoại di động ( <i className="txtRed">*</i> ) :{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Điện thoại di động"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-wrapper">
                      <span htmlFor="">
                        Email ( <i className="txtRed">*</i> ):{" "}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="header_content_form">
                  III. Loại tài khoản chứng khoán muốn mở ?{" "}
                  <span className="txtRed">* </span>
                </div>
                <div className="body_content_form">
                  <p className="m15">
                    Nếu khách hàng muốn mở tài khoản chứng khoán phái sinh nhưng
                    chưa có tài khoản chứng khoán cơ sở, vui lòng đánh dấu vào
                    cả 2 ô.
                    <br />
                    <span className="txtRed">
                      Chọn loại tài khoản chứng khoán muốn mở?
                    </span>
                  </p>
                  <div className="form-row">
                    <div className="form-wrapper">
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="accountType1"
                            name="accountType1"
                            onChange={this.onCheckBoxChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="accountType1"
                          >
                            Cổ phiếu, trái phiếu, chứng quyền có bảo đảm
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-wrapper">
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="accountType2"
                            name="accountType2"
                            onChange={this.onCheckBoxChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="accountType2"
                          >
                            Hợp đồng tương lai
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-wrapper vldSTK">
                      <span htmlFor="validationSTK">
                        Số tài khoản tại MBS
                      </span>
                      <input
                        type="text"
                        className="form-control is-invalid"
                        placeholder="Số tài khoản tại MBS"
                        id="validationSTK"
                        required
                        name="accountNumber"
                        value={accountNumber}
                        onChange={this.onChange}
                      />
                      <div className="invalid-feedback">
                        Nhập số tài khoản (6 kí tự không bao gồm
                        &quot;011C&quot;)
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div className="form-row ">
                    <div className="form-wrapper flb_100 justify-content-center flex-column">
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="agreement"
                            name="agreement"
                            onChange={this.onCheckBoxChange}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="agreement"
                          >
                            Tôi đồng ý với{" "}
                            <i className="txtBlue">
                              Điều khoản và Điều kiện Mở tài khoản Giao dịch
                              Chứng khoán
                            </i>
                          </label>
                        </div>
                      </div>
                      <div>
                        <img alt="img-capcha" src={icCapcha}></img>
                      </div>
                      {!validate && (
                        <div className="txtRed">
                          Vui lòng nhập đủ các thông tin bắt buộc (*)
                        </div>
                      )}
                      <button
                        disabled={!agreement}
                        className="btn btn_continue mt15"
                        onClick={this.handleSubmit}
                      >
                        Tiếp tục
                      </button>
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
CreateTradingAccount.propTypes = {
  message: PropTypes.string,
  clearNotify: PropTypes.func,
  createAccountTrading: PropTypes.func
};

const mapStateToProps = state => {
  return {
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createAccountTrading: data => {
      dispatch(actions.createAccountTrading(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTradingAccount);
