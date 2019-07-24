import React, { Component } from "react";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DEFAULT_TABLE } from "../../../utils/constant";
import actions from "../../../store/expert/actions";
import Table from "../../../components/table/table";
import { toast } from "react-toastify";
import icNoImg from "../../../assets/img/ic_no_img2.png";
import notifyActions from "../../../store/notification/actions";

class ListExpert extends Component {
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
    this.props.history.push(`/create-expert?id=${index}`);
  };
  onDelete = index => {
    const data = {
      id: index
    };
    this.props.delete(data);
  };

  fetchListExpert = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    const data = {
      start: start,
      limit: limit
    };
    this.props.fetchListExpert(data);
  };

  componentDidMount() {
    this.fetchListExpert();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchListExpert();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.fetchListExpert();
      }
      this.props.clearNotify();
    }
  }

  render() {
    const { pageNum, pageSize } = this.state;
    const columns = [
      {
        Header: "HÌNH ẢNH",
        accessor: "url",
        maxWidth: 100,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Hình ảnh:</div>
            <img
              className="img-expert"
              alt="img-expert"
              src={props.value ? props.value : icNoImg}
            />
          </div>
        )
      },
      {
        Header: "HỌ TÊN",
        accessor: "name",
        maxWidth: 300,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Họ tên:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "CHỨC VỤ",
        accessor: "position",
        maxWidth: 200,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Chức vụ:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "Kinh nghiệm",
        accessor: "description",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Kinh nghiệm:</div>
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
              onClick={() => this.props.history.push(`/create-expert`)}
            >
              Thêm chuyên gia
            </button>
            <Table
              title="Quản lý chuyên gia"
              listData={props.listExpert}
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
    listExpert: state.Expert.listExpert,
    total: state.Expert.total,
    detail: state.Expert.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListExpert: data => {
      dispatch(actions.listExpert(data));
    },
    getDetail: data => {
      dispatch(actions.getDetail(data));
    },
    delete: data => {
      dispatch(actions.deleteExpert(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

ListExpert.propTypes = {
  history: PropTypes.func,
  fetchListExpert: PropTypes.func,
  total: PropTypes.number,
  message: PropTypes.string,
  success: PropTypes.string,
  clearNotify: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListExpert);
