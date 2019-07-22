import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { TYPE_ACCOUNT, PERMISSION } from "../../../utils/constant";
import "../../../style/common.scss";
import actions from "../../../store/user/actions";
import notifyActions from "../../../store/notification/actions";
import validator from "validator";

class FormUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      username: "",
      password: "",
      type: TYPE_ACCOUNT[0].type,
      permissionId: PERMISSION[1].type,

      validateEmail: "",
      update: false,
      validate: true
    };
  }
  componentDidMount() {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id) {
      this.setState({
        id: id,
        update: true
      });
      const data = {
        id: id
      };
      this.props.getDetail(data);
    } else {
      this.setState({
        update: false
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.detail) {
      const detail = nextProps.detail;
      this.setState({
        fullName: detail.fullName,
        phoneNumber: detail.phoneNumber,
        email: detail.email,
        address: detail.address,
        username: detail.username,
        password: detail.password,
        type: detail.type,
        permissionId: detail.permissionId
      });
    }
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-user`);
      }
      this.props.clearNotify();
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSelectType = e => {
    this.setState({
      type: TYPE_ACCOUNT[e.target.selectedIndex].type
    });
  };
  onSelectPermission = e => {
    this.setState({
      permissionId: PERMISSION[e.target.selectedIndex].type
    });
  };
  onSubmit = () => {
    if (this.onValidateForm()) {
      const state = this.state;
      if (state.update) {
        const data = {
          id: state.id,
          fullName: state.fullName,
          phoneNumber: state.phoneNumber,
          email: state.email,
          address: state.address,
          username: state.username,
          password: state.password,
          type: state.type,
          permissionId: state.permissionId
        };
        this.props.updateUser(data);
      } else {
        const data = {
          fullName: state.fullName,
          phoneNumber: state.phoneNumber,
          email: state.email,
          address: state.address,
          username: state.username,
          password: state.password,
          type: state.type,
          permissionId: state.permissionId
        };
        this.props.createUser(data);
      }
    }
  };
  onValidateForm = () => {
    const { 
      fullName,
      phoneNumber,
      email,
      address,
      username,
      password,
      type,
      permissionId
    } = this.state;
    let check = fullName !== ""
      && phoneNumber !== ""
      && address !== ""
      && username !== ""
      && password !== ""
      && type !== ""
      && permissionId !== "";
    let checkEmail = "";
    if (email !== "") {
      if (!validator.isEmail(email)) {
        check = false;
        checkEmail= "Email không đúng định dạng";
      } else {
        checkEmail="";
      }
    } else {
      checkEmail= "Vui lòng nhập thông tin";
    }
    this.setState({
      validate: check,
      validateEmail: checkEmail
    });
    return check;
  };

  render() {
    const {
      fullName,
      phoneNumber,
      email,
      address,
      username,
      password,
      type,
      permissionId,
      
      validateEmail,
      update,
      validate
    } = this.state;

    return (
      <Layout>
        <div className="admin-form">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Danh mục</a>
              </li>
              <li className="breadcrumb-item">
                <a href="list-user">Quản lý tài khoản</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tạo tài khoản
              </li>
            </ol>
          </nav>
          {update ? (
            <h1>Cập nhật tài khoản</h1>
          ) : (
            <h1 className="titleNewRe">Tạo tài khoản</h1>
          )}
          <hr></hr>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Họ tên</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={this.onChange}
              />
              {!validate && fullName === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Email</label>
            <div className="col-sm-9 padding0">
              <input
                rows="4"
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              {!validate && validateEmail !== "" && (
                <div className="alert alert-warning" role="alert">
                  {validateEmail}
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Địa chỉ</label>
            <div className="col-sm-9 padding0">
              <input
                rows="4"
                type="text"
                className="form-control"
                id="address"
                name="address"
                value={address}
                onChange={this.onChange}
              />
              {!validate && address === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Số điện thoại</label>
            <div className="col-sm-9 padding0">
              <input
                rows="4"
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.onChange}
              />
              {!validate && phoneNumber === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Tên đăng nhập</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={this.onChange}
              />
              {!validate && username === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Mật khẩu</label>
            <div className="col-sm-9 padding0">
              <input
                rows="4"
                type="text"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={this.onChange}
              />
              {!validate && password === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Loại tài khoản</label>
            <div className="col-sm-9 padding0">
              <select
                className="form-control"
                id="categorySelect"
                onChange={this.onSelectType}
              >
                {TYPE_ACCOUNT.map((item, index) => {
                  return (
                    <option key={index} selected={item.type === type ? "selected" : ""} >
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {!validate && type === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Phân quyền</label>
            <div className="col-sm-9 padding0">
              <select
                className="form-control"
                id="categorySelect"
                onChange={this.onSelectPermission}
              >
                {PERMISSION.map((item, index) => {
                  return (
                    <option key={index} selected={item.type === permissionId ? "selected" : ""} >
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {!validate && permissionId === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group row">
            <div className="col-sm-3 padding0"></div>
            <div className="col-sm-9 padding0">
              <button className="btn btn-save" onClick={this.onSubmit}>
                Lưu
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.Users.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: data => {
      dispatch(actions.updateUser(data));
    },
    createUser: data => {
      dispatch(actions.createUser(data));
    },
    getDetail: data => {
      dispatch(actions.detailUser(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

FormUser.propTypes = {
  getDetail: PropTypes.func,
  history: PropTypes.func,
  clearNotify: PropTypes.func,
  updateUser: PropTypes.func,
  createUser: PropTypes.func,
  detail: PropTypes.object,
  message: PropTypes.string,
  success: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUser);
