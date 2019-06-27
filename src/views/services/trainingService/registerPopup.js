import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import "./registerPopup.scss";
import { currency } from "../../../utils/currency";
import validator from "validator";

class RegisterPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      accountNumber: "",
      validate: true,
      validateEmail: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onValidateForm = () => {
    const { name, phoneNumber, email, accountNumber } = this.state;
    let check =
      name !== "" && phoneNumber !== 0 && email !== "" && accountNumber !== "";
    if (email !== "") {
      if (!validator.isEmail(email)) {
        check = false;
        this.setState({
          validateEmail: "Email không đúng định dạng"
        });
      }
    } else {
      this.setState({
        validateEmail: ""
      });
    }
    this.setState({
      validate: check
    });
    return check;
  };
  onResetForm = () => {
    this.setState({
      name: "",
      phoneNumber: "",
      email: "",
      accountNumber: "",
      validate: true,
      validateEmail: ""
    });
  };
  onSubmit = () => {
    if (this.onValidateForm()) {
      const state = this.state;
      const data = {
        name: state.name,
        phoneNumber: state.phoneNumber,
        email: state.email,
        accountNumber: state.accountNumber,
        courseId: this.props.courseInfo.id
      };
      this.props.onSubmit(data);
      this.props.closePopup();
      this.onResetForm();
    }
  };

  render() {
    const props = this.props;
    const {
      name,
      phoneNumber,
      email,
      accountNumber,
      validate,
      validateEmail
    } = this.state;
    return (
      <div className="popup-register">
        <Modal
          show={props.isShowModal}
          onHide={props.closePopup}
          dialogClassName="popup-wrapper"
        >
          <Modal.Header>
            <div className="popup-header mb-2 text-center">
              đăng ký học{" "}
              <span onClick={props.closePopup} className="mclose w100">
                <i className="fa fa-times"></i>
              </span>
            </div>
          </Modal.Header>
          <Modal.Body className="popup-body">
            <div className="txtCourse">
              Khóa học: {props.courseInfo ? props.courseInfo.name : ""}
            </div>
            <div className="infoMoreCourse">
              Thời gian:
              <b className="txtBlue">
                {props.courseInfo ? props.courseInfo.schedule : ""}
              </b>
              <br />
              Khai giảng:{" "}
              <b className="txtBlue">
                {props.courseInfo ? props.courseInfo.startDate : ""}{" "}
              </b>
              Chi phí:{" "}
              <b className="txtBlue">
                {props.courseInfo ? currency(props.courseInfo.fee) : ""} VNĐ
              </b>{" "}
            </div>
            <div className="form-detail" action="#" method="post" id="myform">
              <div className="form-row">
                <label htmlFor="your_fullname">Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="input-text"
                  onChange={this.onChange}
                />
                {!validate && name === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="your_tel">Số điện thoại</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  className="input-text"
                  onChange={this.onChange}
                />
                {!validate && phoneNumber === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="your_email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  className="input-text"
                  onChange={this.onChange}
                />
                {!validate && email === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
                {!validate && validateEmail !== "" && (
                  <div className="alert alert-warning" role="alert">
                    {validateEmail}
                  </div>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="your_nameAcc">Tên tài khoản</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={accountNumber}
                  className="input-text"
                  onChange={this.onChange}
                />
                {!validate && accountNumber === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
              <div className="form-row-last">
                <button className="register" onClick={this.onSubmit}>
                  <span>Đăng ký học</span>
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
RegisterPopup.propTypes = {
  showPopup: PropTypes.func,
  onSubmit: PropTypes.func,
  closePopup: PropTypes.func,
  title: PropTypes.string,
  closeText: PropTypes.string,
  courseInfo: PropTypes.object,
  isShowModal: PropTypes.bool
};
export default RegisterPopup;
