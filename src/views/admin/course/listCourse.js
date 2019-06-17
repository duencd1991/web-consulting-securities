import React, { Component } from 'react'
import Layout from '../../layout/layout'
import { connect } from 'react-redux';
import { DEFAULT_TABLE, CATEGORY_COURSE, TYPE_COURSE } from '../../../utils/constant';
import actions from '../../../store/trainingService/actions';
import Table from '../../../components/table/table';


class ListCourse extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pageNum: DEFAULT_TABLE.pageNum,
      pageSize: DEFAULT_TABLE.pageSize,
      total: 0
    }
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
  onDelete = (index) => {
    alert('Xóa bản tin số ', index);
  }
  onEdit = (index) => {
    this.props.history.push(`/create-course?id=${index}`);
  }

  fetchListCourse = () => {
    const state = this.state
    let start = (state.pageNum - 1) * state.pageSize
    let limit = state.pageSize + start
    this.props.fetchListCourse(start, limit, null, null, null);
  }

  componentDidMount () {
    this.fetchListCourse();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNum !== this.state.pageNum || prevState.pageSize !== this.state.pageSize) {
      this.fetchListCourse();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.props.total && nextProps.total > 0) {
      this.setState({
        total: nextProps.total
      })
    }
  }

  render () {
    const { pageNum, pageSize, total} = this.state;
    const columns = [
      {
        Header: 'DANH MỤC',
        accessor: 'category',
        maxWidth: 300,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Danh mục:</div>
          {
            CATEGORY_COURSE.map(item => {
              if (item.cat === props.value) {
                return item.name
              }
              return null;
            })
          }
        </div>
      },
      {
        Header: 'TIÊU ĐỀ',
        accessor: 'name',
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Tiêu đề:</div>
          {props.value}
        </div>
      },
      {
        Header: 'CHI TIẾT',
        accessor: 'description',
        maxWidth: 100,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Chi tiết:</div>
          {props.value}
        </div>
      },
      {
        Header: 'LỊCH HỌC',
        accessor: 'schedule',
        maxWidth: 200,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Lịch học:</div>
          {props.value}
        </div>
      },
      {
        Header: 'KHAI GIẢNG',
        accessor: 'startDate',
        maxWidth: 200,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Khai giảng:</div>
          {props.value}
        </div>
      },
      {
        Header: 'HỌC PHÍ',
        accessor: 'fee',
        maxWidth: 200,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Học phí:</div>
          {props.value}
        </div>
      },
      {
        Header: 'GIẢNG VIÊN',
        accessor: 'teacher',
        maxWidth: 200,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Giảng viên:</div>
          {props.value}
        </div>
      },
      {
        Header: 'HÌNH THỨC',
        accessor: 'type',
        maxWidth: 200,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Giảng viên:</div>
          {
            TYPE_COURSE.map(item => {
              if (item.type === props.value) {
                return item.name
              }
              return null;
            })
          }
        </div>
      },
      {
        Header: '',
        accessor: 'id',
        maxWidth: 100,
        Cell: props => <div className='table-center-element action-box'>
          <i className="far fa-edit mr-3" onClick={(e) => this.onEdit(props.value)}></i>
          {/* <i className="far fa-trash-alt" onClick={(e) => this.onDelete(props.value)}></i> */}
        </div>
      }
    ];
    const props = this.props;
    return (
      <Layout>
        <div className='list-news-page'>
          <div className='news-tables table-content'>
            <button className='btn btn-create-new' onClick={() => this.props.history.push(`/create-course`)}>
              Tạo mới kiến thức
            </button>
            <Table 
              title='Quản lý danh mục kiến thức'
              listData={props.listCourse}
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
    )
  }
}
const mapStateToProps = state => {
  return {
    listCourse: state.TrainingService.listCourse,
    total: state.TrainingService.total,
    detail: state.TrainingService.detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListCourse: (start, limit, type, category, priority) => {
      dispatch(actions.listCourse(start, limit, type, category, priority));
    },
    getDetail: (id) => {
      dispatch(actions.getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCourse)