import React, { Component } from "react";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DEFAULT_TABLE, REGISTER_STATUS } from "../../../utils/constant";
import actions from "../../../store/trainingService/actions";
import Table from "../../../components/table/table";

class ListRegisterCourse extends Component {
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

  fetchListRegisterCourse = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    const data = {
      start: start,
      limit: limit
    };
    this.props.fetchListRegisterCourse(data);
  };

  componentDidMount() {
    this.fetchListRegisterCourse();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchListRegisterCourse();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.props.total && nextProps.total > 0) {
      this.setState({
        total: nextProps.total
      });
    }
  }

  render() {
    const { pageNum, pageSize, total } = this.state;
    const columns = [
      {
        Header: "NGƯỜI ĐĂNG KÝ",
        accessor: "name",
        maxWidth: 200,
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
        Header: "TÊN KHÓA HỌC",
        accessor: "courseName",
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Tên khóa học:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "KHAI GIẢNG",
        accessor: "courseStartDate",
        maxWidth: 150,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Khai giảng:</div>
            {props.value}
          </div>
        )
      },
      {
        Header: "NGÀY ĐĂNG KÝ",
        accessor: "createDate",
        maxWidth: 150,
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
        Cell: props => (
          <div className="table-center-element action-box">
            <i className="far fa-edit mr-3" onClick={(e) => this.onEdit(props.value)}></i>
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
            <Table
              title="Danh sách đăng ký khóa học"
              listData={props.listRegisterCourse}
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
ListRegisterCourse.propTypes = {
  fetchListRegisterCourse: PropTypes.func,
  listRegisterCourse: PropTypes.array,
  total: PropTypes.number
};

const mapStateToProps = state => {
  return {
    listRegisterCourse: state.TrainingService.listRegisterCourse,
    total: state.TrainingService.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListRegisterCourse: data => {
      dispatch(actions.registerCourseList(data));
    },
    getDetail: id => {
      dispatch(actions.registerCourseDetail(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRegisterCourse);
