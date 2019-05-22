import React, { Component } from 'react';
import Layout from '../layout/layout';
import { connect } from 'react-redux';
import './report.scss';
import ReactTable from 'react-table';
import Pagination from 'react-js-pagination';
import 'react-table/react-table.css';
import { DEFAULT_TABLE } from '../../utils/constant';
import icDownload from '../../assets/img/ic-download.png';

const listReport = [
  {
    stt: 1,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 2,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 3,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 4,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 5,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 6,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 7,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 8,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  },
  {
    stt: 9,
    name: 'Chiến lược giao dịch HĐTL ngày 10.04.2019 - Article',
    updated: '09/04/2019',
    views: 189,
    url: 'abc.com.vn'
  }
]

class Report extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedType: 'phaisinh',
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize,
      total: listReport.length
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
          {props.value}
        </div>
      },
      {
        Header: 'THỜI GIAN',
        accessor: 'updated',
        maxWidth: 150,
        Cell: props => <div className='table-center-element'>
          {props.value}
        </div>
      },
      {
        Header: 'LƯỢT XEM',
        accessor: 'views',
        maxWidth: 100,
        Cell: props => <div className='table-center-element'>
          {props.value}
        </div>
      },
      {
        Header: 'DOWNLOAD',
        accessor: 'url',
        maxWidth: 100,
        Cell: props => <div className='table-center-element'>
          <a href={props.value} target="_blank" >
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
              <div className={selectedType === 'phaisinh' ? 'report-type-item selected' : 'report-type-item'}
                onClick={ () => this.onChangeType('phaisinh')} >Bản tin phái sinh <span></span></div>
              <div className={selectedType === 'coban' ? 'report-type-item selected' : 'report-type-item'}
                onClick={ () => this.onChangeType('coban')} >Báo cáo Phân tích cơ bản Phái sinh</div>
              <div className={selectedType === 'kythuat' ? 'report-type-item selected' : 'report-type-item'}
                onClick={ () => this.onChangeType('kythuat')} >Báo cáo phân tích kỹ thuật Phái sinh</div>
              <div className={selectedType === 'cw' ? 'report-type-item selected' : 'report-type-item'}
                onClick={ () => this.onChangeType('cw')} >Báo cáo phân tích CW</div>
            </div>
            <div className='report-tables'>
              <div className='report-title'>BÁO CÁO PHÂN TÍCH CƠ BẢN PHÁI SINH</div>
              <hr />
              <ReactTable
                data={listReport}
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
                  firstPageText={<i className="fas fa-angle-double-left"></i>}
                  lastPageText={<i className="fas fa-angle-double-right"></i>}
                  prevPageText={<i className="fas fa-angle-left"></i>}
                  nextPageText={<i className="fas fa-angle-right"></i>}
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps,mapDispatchToProps)(Report);