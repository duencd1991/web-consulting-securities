import React, { Component } from 'react';
import './table.scss';
import PropTypes from 'prop-types';

import { DEFAULT_TABLE } from '../../utils/constant';
import ReactTable from 'react-table';
import Pagination from 'react-js-pagination';
import 'react-table/react-table.css';

class Table extends Component {

  render() {
    const props = this.props;
    return(
      <div className='table-custom'>
        <div className='table-title'>{props.title}</div>
          <hr />
          <ReactTable
            data={props.listData}
            columns={props.columns}
            previousText='preText'
            nextText='nextText'
            noDataText='Không có dữ liệu'
            pageText='pageText'
            ofText='ofText'
            rowsText='rowsText'
            pageSize={props.pageSize}
            showPagination={false}
            resizable={false} >
          </ReactTable>
          <div className="d-flex flex-row-reverse">
            <Pagination
              firstPageText={<i className="fas icArrowStart"></i>}
              lastPageText={<i className="fas icArrowEnd"></i>}
              prevPageText={<i className="fas icArrowPrev"></i>}
              nextPageText={<i className="fas icArrowNext"></i>}
              activePage={props.pageNum}
              itemsCountPerPage={props.pageSize}
              totalItemsCount={props.total}
              onChange={props.onChangePageNum}
            />
            <div className='form-group sort-by'>
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownRows" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {`${props.pageSize} hàng`}
                </button>
                <div className="dropdown-menu dropdown-menu-right select-row" aria-labelledby="dropdownRows">
                  <button className="dropdown-item" onClick={(e) => props.onChangePageSize(5)}>{`5 hàng`}</button>
                  <button className="dropdown-item" onClick={(e) => props.onChangePageSize(10)}>{`10 hàng`}</button>
                  <button className="dropdown-item" onClick={(e) => props.onChangePageSize(15)}>{`15 hàng`}</button>
                  <button className="dropdown-item" onClick={(e) => props.onChangePageSize(20)}>{`20 hàng`}</button>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
  }
}
Table.propTypes = {
  title: PropTypes.string,
  listData: PropTypes.array,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  pageNum: PropTypes.number,
  total: PropTypes.number,
  onChangePageNum: PropTypes.func,
  onChangePageSize: PropTypes.func
};
Table.defaultProps = {
  title: 'Tiêu đề mẫu',
  listData: [],
  columns: [
    {
      Header: <div className='table-center-element'>NỘI DUNG</div>,
    },
  ],
  pageSize: DEFAULT_TABLE.pageSize,
  pageNum: DEFAULT_TABLE.pageNum,
  total: 0,
  onChangePageNum: () => {},
  onChangePageSize: () => {}
};
export default Table;