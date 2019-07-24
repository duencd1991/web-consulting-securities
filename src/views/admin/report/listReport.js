import React, { Component } from "react";
import Layout from "../../layout/layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { DEFAULT_TABLE, TYPE_REPORT } from "../../../utils/constant";
import { toast } from "react-toastify";
import actions from "../../../store/reports/actions";
import notifyActions from "../../../store/notification/actions";
import "./listReport.scss";
import Table from "../../../components/table/table";

class ListReport extends Component {
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
  onDelete = index => {
    this.props.deleteReport({id: index});
  };
  onEdit = index => {
    this.props.history.push(`/create-report?id=${index}`);
  };

  fetchReport = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    this.props.fetchListReport(start, limit, null);
  };

  componentDidMount() {
    this.fetchReport();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchReport();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.fetchReport();
      }
      this.props.clearNotify();
    }
  }

  render() {
    const { pageNum, pageSize } = this.state;
    const columns = [
      {
        Header: "DANH MỤC",
        accessor: "type",
        maxWidth: 300,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Danh mục:</div>
            {TYPE_REPORT.map(item => {
              if (item.type === props.value) {
                return item.name;
              }
              return null;
            })}
          </div>
        )
      },
      {
        Header: "TIÊU ĐỀ",
        accessor: "name",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Tiêu đề:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "LƯỢT XEM",
        accessor: "views",
        maxWidth: 100,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Lượt xem:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "NGÀY ĐĂNG",
        accessor: "date",
        maxWidth: 200,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Ngày đăng:</div>
            {props.value}
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
            <i className="far fa-trash-alt" onClick={(e) => this.onDelete(props.value)}></i>
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
              onClick={() => this.props.history.push(`/create-report`)}
            >
              Tạo mới báo cáo
            </button>
            <Table
              title="Quản lý danh mục báo cáo"
              listData={props.listReport}
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
ListReport.propTypes = {
  history: PropTypes.func,
  fetchListReport: PropTypes.func,
  listReport: PropTypes.array,
  total: PropTypes.number
};
const mapStateToProps = state => {
  return {
    listReport: state.Reports.list,
    total: state.Reports.total,
    detail: state.Reports.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListReport: (start, limit, category) => {
      dispatch(actions.listReport(start, limit, category));
    },
    getDetail: id => {
      dispatch(actions.getDetail(id));
    },
    deleteReport: data => {
      dispatch(actions.deleteReport(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListReport);
