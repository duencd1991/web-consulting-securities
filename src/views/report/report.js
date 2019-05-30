import React, { Component } from 'react';
import Layout from '../layout/layout';
import { connect } from 'react-redux';
import './report.scss';
import ReactTable from 'react-table';
import Pagination from 'react-js-pagination';
import 'react-table/react-table.css';
import { DEFAULT_TABLE } from '../../utils/constant';
import icDownload from '../../assets/img/ic-download.png';
import actions from '../../store/reports/actions';

const listType = [
  {
    type: 1,
    title: 'Bản tin phái sinh'
  },
  {
    type: 2,
    title: 'Báo cáo Phân tích cơ bản Phái sinh'
  },
  {
    type: 3,
    title: 'Báo cáo phân tích kỹ thuật Phái sinh'
  },
  {
    type: 4,
    title: 'Báo cáo phân tích CW'
  }
]

class Report extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedType: 1,
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize,
      total: 0
    }
  }

  onChangeType = (type) => {
    this.setState({
      selectedType: type
    })
  }

  onChangePageSize = (size) => {
    this.setState({
      pageSize: size,
      pageNum: DEFAULT_TABLE.pageNum
    })
  }
  onChangePageNum = (pageNum) => {
    this.setState({
      pageNum: pageNum
    })
  }

  componentDidMount() {
    const state = this.state;
    let start = (state.pageNum - 1) *  state.pageSize;
    let limit = state.pageSize + start; 
    this.props.fetchListReport(start, limit, state.selectedType);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.props.total && nextProps.total > 0) {
      this.setState({
        total: nextProps.total
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedType !== this.state.selectedType) {
      const state = this.state;
      let start = (state.pageNum - 1) *  state.pageSize;
      let limit = state.pageSize + start; 
      this.props.fetchListReport(start, limit, state.selectedType);
    }
  }

  render() {
    const {
      selectedType,
      pageSize,
      pageNum,
      total
    } = this.state;
    const columns = [
      {
        Header: <div className='table-center-element'>TT</div>,
        accessor: 'stt',
        maxWidth: 50,
        Cell: props => <div className='table-center-element'>
          {props.value}
        </div>
      },
      {
        Header: 'SẢN PHẨM',
        accessor: 'name',
        Cell: props => <div className='txtBold'>
           {/* <div className='table-center-no'>
        
           </div> */}
          {props.value}
        </div>
      },
      {
        Header: 'THỜI GIAN',
        accessor: 'date',
        maxWidth: 120,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Thời gian:</div>
          {props.value}
        </div>
      },
      {
        Header: 'LƯỢT XEM',
        accessor: 'views',
        maxWidth: 100,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Lượt view:</div>
          {props.value}
        </div>
      },
      {
        Header: 'DOWNLOAD',
        accessor: 'url',
        maxWidth: 100,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Download:</div>
          <a href={props.value} target="_blank" rel='noopener noreferrer' >
            <img src={icDownload} alt='img'/>
          </a>
        </div>
      }
    ]
    return(
      <Layout title="">
        <div className='report-page'>
          <div className='report-banner'>
            <h3>BÁO CÁO PHÂN TÍCH</h3>
          </div>
          <div className='report-content'>
            <div className='report-types'>
            {
              listType.map((item, index) => {
                return <div key={index} className={selectedType === item.type ? 'report-type-item selected' : 'report-type-item'}
                onClick={ () => this.onChangeType(item.type)} >{item.title}</div>
              })
            }
            </div>
            <div className='report-tables'>
              <div className='report-title'>BÁO CÁO PHÂN TÍCH CƠ BẢN PHÁI SINH</div>
              <hr />
              <ReactTable
                data={this.props.listReport}
                columns={columns}
                previousText='preText'
                nextText='nextText'
                noDataText='Không có dữ liệu'
                pageText='pageText'
                ofText='ofText'
                rowsText='rowsText'
                pageSize={pageSize}
                showPagination={false}
                resizable={false} >
              </ReactTable>
              <div className="d-flex flex-row-reverse">
                <Pagination
                  firstPageText={<i className="fas icArrowStart"></i>}
                  lastPageText={<i className="fas icArrowEnd"></i>}
                  prevPageText={<i className="fas icArrowPrev"></i>}
                  nextPageText={<i className="fas icArrowNext"></i>}
                  activePage={pageNum}
                  itemsCountPerPage={pageSize}
                  totalItemsCount={total}
                  onChange={this.onChangePageNum}
                />
                <div className='form-group sort-by'>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" id="dropdownRows" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {`${pageSize} hàng`}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right select-row" aria-labelledby="dropdownRows">
                      <button className="dropdown-item" onClick={(e) => this.onChangePageSize(5)}>{`5 hàng`}</button>
                      <button className="dropdown-item" onClick={(e) => this.onChangePageSize(10)}>{`10 hàng`}</button>
                      <button className="dropdown-item" onClick={(e) => this.onChangePageSize(15)}>{`15 hàng`}</button>
                      <button className="dropdown-item" onClick={(e) => this.onChangePageSize(20)}>{`20 hàng`}</button>
                    </div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    listReport: state.Reports.list,
    total: state.Reports.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListReport: (start, limit, type) => {
      dispatch(actions.listReport(start, limit, type));
    },
    updateViews: (id) => {
      dispatch(actions.updateView(id));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Report);