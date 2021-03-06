import React, { Component } from "react";
import Layout from "../layout/layout";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./report.scss";
import { DEFAULT_TABLE, TYPE_REPORT } from "../../utils/constant";
import icDownload from "../../assets/img/ic-download.png";
import actions from "../../store/reports/actions";
import Table from "../../components/table/table";

class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: 1,
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize
    };
  }

  onChangeType = type => {
    this.setState({
      selectedType: type
    });
  };

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

  componentDidMount() {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    this.props.fetchListReport(start, limit, state.selectedType);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedType !== this.state.selectedType) {
      const state = this.state;
      const start = (state.pageNum - 1) * state.pageSize;
      const limit = state.pageSize + start;
      this.props.fetchListReport(start, limit, state.selectedType);
    }
  }

  render() {
    const { selectedType, pageSize, pageNum } = this.state;
    const columns = [
      {
        Header: <div className="table-center-element">TT</div>,
        accessor: "stt",
        maxWidth: 50,
        Cell: props => <div className="table-center-element">{props.value}</div>
      },
      {
        Header: "SẢN PHẨM",
        accessor: "name",
        Cell: props => (
          <div className="txtBold">
            {/* <div className='table-center-no'>
        
           </div> */}
            {props.value}
          </div>
        )
      },
      {
        Header: "THỜI GIAN",
        accessor: "date",
        maxWidth: 120,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Thời gian:</div>
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
            <div className="table-center-time">Lượt view:</div>
            {props.value}
          </div>
        )
      },
      {
        id: "reportId",
        Header: "DOWNLOAD",
        accessor: row => [row.id, row.url],
        maxWidth: 100,
        Cell: props => (
          <div className="table-center-element">
            <div className="table-center-time">Download:</div>
            <a
              href={props.value[1]}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => this.props.updateViews(props.value[0])}
            >
              <img src={icDownload} alt="img" />
            </a>
          </div>
        )
      }
    ];
    const props = this.props;
    return (
      <Layout title="">
        <div className="report-page">
          <div className="report-banner">
            <h3>BÁO CÁO PHÂN TÍCH</h3>
          </div>
          {
            this.props.profile.username ? <div className="report-content">
              <div className="report-types">
                {TYPE_REPORT.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={
                        selectedType === item.type
                          ? "report-type-item selected"
                          : "report-type-item"
                      }
                      onClick={() => this.onChangeType(item.type)}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
              <div className="report-tables">
                <Table
                  title="BÁO CÁO PHÂN TÍCH CƠ BẢN PHÁI SINH"
                  listData={props.listReport}
                  columns={columns}
                  pageSize={pageSize}
                  pageNum={pageNum}
                  total={this.props.total}
                  onChangePageNum={this.onChangePageNum}
                  onChangePageSize={this.onChangePageSize}
                />
              </div>
            </div> : <div className="report-content">
              <div className="request-login">Vui lòng đăng nhập để sử dụng chức năng này</div>
            </div>
          }
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    listReport: state.Reports.list,
    total: state.Reports.total,
    profile: state.Users.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListReport: (start, limit, type) => {
      dispatch(actions.listReport(start, limit, type));
    },
    updateViews: id => {
      dispatch(actions.updateViews(id));
    }
  };
};
Report.propTypes = {
  fetchListReport: PropTypes.func,
  updateViews: PropTypes.func,
  listReport: PropTypes.array,
  total: PropTypes.number,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);
