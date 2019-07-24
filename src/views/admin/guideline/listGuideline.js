import React, { Component } from "react";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DEFAULT_TABLE, TYPE_GUIDELINE } from "../../../utils/constant";
import actions from "../../../store/tradingInstruction/actions";
import Table from "../../../components/table/table";
import { toast } from "react-toastify";
import notifyActions from "../../../store/notification/actions";

class ListGuideline extends Component {
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
  onEdit = index => {
    this.props.history.push(`/create-guideline?id=${index}`);
  };
  onDelete = index => {
    const data = {
      id: index
    };
    this.props.deleteGuideline(data);
  };

  fetchListGuideline = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    const data = {
      start: start,
      limit: limit
    };
    this.props.fetchListGuideline(data);
  };

  componentDidMount() {
    this.fetchListGuideline();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchListGuideline();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.fetchListGuideline();
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
            {TYPE_GUIDELINE.map(item => {
              if (item.type === props.value) {
                return item.title;
              }
              return null;
            })}
          </div>
        )
      },
      {
        Header: "TIÊU ĐỀ",
        accessor: "name",
        maxWidth: 300,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Tiêu đề:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "Ngày tạo",
        accessor: "date",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Ngày tạo:</div>
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
            <div className="table-center-time">Chức vụ:</div>
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
            <i
              className="far fa-trash-alt"
              onClick={e => this.onDelete(props.value)}
            ></i>
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
              onClick={() => this.props.history.push(`/create-guideline`)}
            >
              Thêm hướng dẫn
            </button>
            <Table
              title="Quản lý hướng dẫn"
              listData={props.listGuideline}
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
    listGuideline: state.GuideLines.listGuideline,
    total: state.GuideLines.total,
    detail: state.GuideLines.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListGuideline: data => {
      dispatch(actions.listGuideline(data));
    },
    getDetail: data => {
      dispatch(actions.getDetail(data));
    },
    create: data => {
      dispatch(actions.create(data));
    },
    update: data => {
      dispatch(actions.update(data));
    },
    deleteGuideline: data => {
      dispatch(actions.deleteGuideline(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

ListGuideline.propTypes = {
  history: PropTypes.func,
  fetchListGuideline: PropTypes.func,
  total: PropTypes.number,
  message: PropTypes.string,
  success: PropTypes.string,
  clearNotify: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGuideline);
