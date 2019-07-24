import React, { Component } from "react";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { DEFAULT_TABLE, REGISTER_STATUS } from "../../../utils/constant";
import actions from "../../../store/accountTrading/actions";
import notifyActions from "../../../store/notification/actions";
import Table from "../../../components/table/table";

class ListAccountTrading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize
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
  fetchListAccountTrading = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    const data = {
      start: start,
      limit: limit
    };
    this.props.fetchListAccountTrading(data);
  };

  componentDidMount() {
    this.fetchListAccountTrading();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchListAccountTrading();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.fetchListAccountTrading();
      }
      this.props.clearNotify();
    }
  }
  onChangeStatus = (id, status) => {
    const data = {
      id: id,
      status: status
    }
    this.props.changeStatusAccouttrading(data);
  }

  render() {
    const { pageNum, pageSize } = this.state;
    const columns = [
      {
        Header: "NGƯỜI ĐĂNG KÝ",
        accessor: "name",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Người đăng ký:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "ĐIỆN THOẠI",
        accessor: "phoneNumber",
        maxWidth: 150,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Số điện thoại:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "Email",
        accessor: "email",
        maxWidth: 200,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Email:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "NGÀY ĐĂNG KÝ",
        accessor: "createdDate",
        maxWidth: 200,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Ngày đăng ký:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "TRẠNG THÁI",
        accessor: "status",
        maxWidth: 150,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Trạng thái:</div>
            {REGISTER_STATUS.map(item => {
              if (item.status === props.value) {
                return <div className={item.color}>{item.name}</div>
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
            <i className="far fa-check-circle mr-3 color-done" onClick={(e) => this.onChangeStatus(props.value, REGISTER_STATUS[1].status)}></i>
            <i className="far fa-times-circle color-cancel" onClick={(e) => this.onChangeStatus(props.value, REGISTER_STATUS[2].status)}></i>
          </div>
        )
      }
    ];
    const props = this.props;
    return (
      <Layout>
        <div className="admin-form">
          <div className="table-content">
            <Table
              title="Danh sách mở tài khoản"
              listData={props.listAccountTrading}
              columns={columns}
              pageSize={pageSize}
              pageNum={pageNum}
              total={this.props.total}
              onChangePageNum={this.onChangePageNum}
              onChangePageSize={this.onChangePageSize}
            />
          </div>
        </div>
      </Layout>
    );
  }
}
ListAccountTrading.propTypes = {
  fetchListAccountTrading: PropTypes.func,
  listAccountTrading: PropTypes.array,
  total: PropTypes.number
};

const mapStateToProps = state => {
  return {
    listAccountTrading: state.AccountTrading.listAccountTrading,
    total: state.AccountTrading.total,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListAccountTrading: data => {
      dispatch(actions.listAccountTrading(data));
    },
    getDetail: id => {
      dispatch(actions.accountTradingDetail(id));
    },
    changeStatusAccouttrading: data => {
      dispatch(actions.accountTradingChangeStatus(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAccountTrading);
