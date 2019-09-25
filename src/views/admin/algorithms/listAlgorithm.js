import React, { Component } from "react";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DEFAULT_TABLE } from "../../../utils/constant";
import actions from "../../../store/algorithm/actions";
import Table from "../../../components/table/table";
import "../report/listReport.scss";
import { toast } from "react-toastify";
import notifyActions from "../../../store/notification/actions";

class ListAlgorithm extends Component {
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
    this.props.deleteCourse({id: index});
  };
  onEdit = index => {
    this.props.history.push(`/create-course?id=${index}`);
  };

  fetchListAlgorithm = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    const data = {
      start: start,
      limit: limit
    }
    this.props.fetchListAlgorithm(data);
  };

  componentDidMount() {
    this.fetchListAlgorithm();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchListAlgorithm();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.fetchListAlgorithm();
      }
      this.props.clearNotify();
    }
  }

  render() {
    const { pageNum, pageSize } = this.state;
    const columns = [
      {
        Header: "TÊN",
        accessor: "name",
        maxWidth: 200,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Tên:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "NHÀ PHÁT TRIỂN",
        accessor: "author",
        maxWidth: 150,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Nhà phát triển:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "BỘ TÍN HIỆU",
        accessor: "signal",
        maxWidth: 150,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Bộ tín hiệu:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "ÁP DỤNG",
        accessor: "apply",
        maxWidth: 250,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Áp dụng:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "CHI TIẾT",
        accessor: "description",
        maxWidth: 500,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Chi tiết:</div>
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
              onClick={() => this.props.history.push(`/create-algorithm`)}
            >
              Tạo mới thuật toán
            </button>
            <Table
              title="Quản lý thuật toán"
              listData={props.listAlgorithm}
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
const mapStateToProps = state => {
  return {
    listCourse: state.TrainingService.listCourse,
    total: state.TrainingService.total,
    detail: state.TrainingService.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListAlgorithm: data => {
      dispatch(actions.listAlgorithm(data));
    },
    getDetail: data => {
      dispatch(actions.algorithmDetail(data));
    },
    deleteAlgorithm: data => {
      dispatch(actions.algorithmDelete(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

ListAlgorithm.propTypes = {
  history: PropTypes.object,
  fetchListAlgorithm: PropTypes.func,
  listAlgorithm: PropTypes.array,
  total: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAlgorithm);
