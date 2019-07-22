import React, { Component } from "react";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DEFAULT_TABLE, TYPE_ACCOUNT, PERMISSION } from "../../../utils/constant";
import actions from "../../../store/user/actions";
import Table from "../../../components/table/table";
import { toast } from "react-toastify";
import icNoImg from "../../../assets/img/ic_no_img2.png";
import notifyActions from "../../../store/notification/actions";

class ListUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize,
      total: 0
    };
  }

  onChangePageSize = size => {
    this.setState({
      pageSize: size,
      pageNum: DEFAULT_TABLE.pageNum
    });
  };
  onChangePageNum = pageNum => {
    this.setState({
      pageNum: pageNum
    });
  };
  onEdit = index => {
    this.props.history.push(`/create-user?id=${index}`);
  };
  onDelete = index => {
    const data = {
      id: index
    };
    this.props.delete(data);
  };

  fetchListUser = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    const data = {
      start: start,
      limit: limit
    };
    this.props.fetchListUser(data);
  };

  componentDidMount() {
    this.fetchListUser();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchListUser();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.props.total && nextProps.total > 0) {
      this.setState({
        total: nextProps.total
      });
    }
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.fetchListUser();
      }
      this.props.clearNotify();
    }
  }

  render() {
    const { pageNum, pageSize, total } = this.state;
    const columns = [
      {
        Header: "HỌ TÊN",
        accessor: "fullName",
        maxWidth: 200,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Họ tên:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "SĐT",
        accessor: "phoneNumber",
        maxWidth: 100,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Số điện thoại:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "ĐỊA CHỈ",
        accessor: "address",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Địa chỉ:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "TÊN ĐĂNG NHẬP",
        accessor: "username",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Tên đăng nhập:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "EMAIL",
        accessor: "email",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Email:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "LOẠI",
        accessor: "type",
        maxWidth: 100,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Loại:</div>
              {TYPE_ACCOUNT.map(item => {
                if (item.type === props.value) {
                  return item.name;
                }
                return null;
              })}
          </div>
        )
      },
      {
        Header: "QUYỀN",
        accessor: "permissionId",
        maxWidth: 100,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Quyền:</div>
              {PERMISSION.map(item => {
                if (item.type === props.value) {
                  return item.name;
                }
                return null;
              })}
          </div>
        )
      },
      {
        Header: "",
        accessor: "id",
        maxWidth: 100,
        Cell: props => (
          <div className="table-center-element action-box">
            <i
              className="far fa-edit mr-3"
              onClick={e => this.onEdit(props.value)}
            ></i>
            {/* <i
              className="far fa-trash-alt"
              onClick={e => this.onDelete(props.value)}
            ></i> */}
          </div>
        )
      }
    ];
    const props = this.props;
    return (
      <Layout>
        <div className="admin-form">
          <div className="table-content">
            <button
              className="btn btn-create-new"
              onClick={() => this.props.history.push(`/create-user`)}
            >
              Tạo tài khoản
            </button>
            <Table
              title="Quản lý tài khoản"
              listData={props.listUser}
              columns={columns}
              pageSize={pageSize}
              pageNum={pageNum}
              total={total}
              onChangePageNum={this.onChangePageNum}
              onChangePageSize={this.onChangePageSize}
            />
          </div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    listUser: state.Users.listUser,
    total: state.Users.total,
    detail: state.Users.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListUser: data => {
      dispatch(actions.listUser(data));
    },
    getDetail: data => {
      dispatch(actions.detailUser(data));
    },
    delete: data => {
      dispatch(actions.deleteUser(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

ListUsers.propTypes = {
  history: PropTypes.func,
  fetchListUser: PropTypes.func,
  total: PropTypes.number,
  message: PropTypes.string,
  success: PropTypes.string,
  clearNotify: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListUsers);
