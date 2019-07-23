import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./headerTop.scss";
import userActions from "../../store/user/actions";

class HeaderTop extends Component {
  render() {
    return (
      <div className="header-top">
        <div className="menu-top-limit">
          <a href="https://d24.mbs.com.vn">D24</a>
          <div className="col-separator" />
          <a href="https://banggia.mbs.com.vn/v2">Bảng giá</a>
          <div className="col-separator" />
          <a href="https://banggia.mbs.com.vn/ptktsc">Đồ thị kỹ thuật</a>
          <div className="col-separator" />
          <a href="https://stock24.mbs.com.vn">Stock24</a>
        </div>
        {
          this.props.profile.fullName ? <div className="user-info">
            {this.props.profile.fullName}
            <div className="btn btn-register" onClick={this.props.logout}>
              Đăng xuất
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </div> : <div className="register-top-limit">
            <span id="guide-register-text">
              Bạn có <span>TÀI KHOẢN</span> giao dịch <span>CHỨNG KHOÁN</span>{" "}
              chưa?
            </span>
            <div className="listBtn">
              <a className="btn btn-register" href="/create-trading-account">
                <i className="far ic_account"></i>Mở tài khoản
              </a>
              <a className="btn btn-login" href="/sign-in">
                <i className="fas ic_unlock"></i>Đăng nhập
              </a>
            </div>
          </div>
        }
        
      </div>
    );
  }
}
HeaderTop.propTypes = {
  profile: PropTypes.object,
  logout: PropTypes.func,
  t: PropTypes.func
};

const mapStateToProps = state => {
  return {
    profile: state.Users.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(userActions.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderTop);
