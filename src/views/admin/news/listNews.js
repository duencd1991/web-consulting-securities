import React, { Component } from 'react'
import Layout from '../../layout/layout'
import { connect } from 'react-redux';
import { DEFAULT_TABLE, TYPE_NEWS } from '../../../utils/constant';
import actions from '../../../store/news/actions';
import './listNews.scss';
import '../report/listReport.scss';
import Table from '../../../components/table/table';


class ListNews extends Component {
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
    this.props.history.push(`/create-news?id=${index}`);
  }

  fetchNews = () => {
    const state = this.state
    let start = (state.pageNum - 1) * state.pageSize
    let limit = state.pageSize + start
    this.props.fetchListNews(start, limit, null)
  }

  componentDidMount () {
    this.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageNum !== this.state.pageNum || prevState.pageSize !== this.state.pageSize) {
      this.fetchNews();
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
        accessor: 'categoryId',
        maxWidth: 300,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Danh mục:</div>
          {
            TYPE_NEWS.map(item => {
              if (item.type === props.value) {
                return item.name
              }
              return null;
            })
          }
        </div>
      },
      {
        Header: 'TIÊU ĐỀ',
        accessor: 'title',
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Tiêu đề:</div>
          {props.value}
        </div>
      },
      {
        Header: 'LƯỢT XEM',
        accessor: 'views',
        maxWidth: 100,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Lượt xem:</div>
          {props.value}
        </div>
      },
      {
        Header: 'NGÀY ĐĂNG',
        accessor: 'date',
        maxWidth: 200,
        Cell: props => <div className='table-center-element'><div className='table-center-time'>Ngày đăng:</div>
          {props.value}
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
            <button className='btn btn-create-new' onClick={() => this.props.history.push(`/create-news`)}>
              Tạo mới kiến thức
            </button>
            <Table 
              title='Quản lý danh mục kiến thức'
              listData={props.listNews}
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
    listNews: state.News.listNews,
    total: state.News.total,
    detail: state.News.detail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchListNews: (start, limit, category) => {
      dispatch(actions.listNews(start, limit, category))
    },
    getDetail: (id) => {
      dispatch(actions.getDetail(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListNews)
