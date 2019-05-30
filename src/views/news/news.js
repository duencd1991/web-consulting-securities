import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../layout/layout';
import './news.scss';
import Pagination from 'react-js-pagination';
import icNoImg from '../../assets/img/thumbnail-no-img.png';
import icNoImg2 from '../../assets/img/thumbnail-no-img2.png';
import icArrowPrev from '../../assets/img/icArrowPrev.png'
import icArrowNext from '../../assets/img/icArrowNext.png'
import icArrowStart from '../../assets/img/icArrowStart.png'
import icArrowEnd from '../../assets/img/icArrowEnd.png';
import actions from '../../store/news/actions';
import history from '../../utils/history';


const listNewMenu = [
  'Để đầu tư chứng khoán hiệu quả',
  'Theo dõi hiệu quả DM đầu tư Smart Money',
  'Cập nhật thị trường',
  'Tin khuyến mãi',
  'Thư viện',
  'Video'
]

class News extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 1,
      pageNum: 1,
      pageSize: 6,
      total: 0
    }
  }

  onSelectMenu = (index) => {
    this.setState({
      selectedMenu: index
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
    this.props.fetchListNews(start, limit, state.selectedMenu);
    this.props.fetchListNewsHot();
    this.props.fetchlistNewsTop();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedMenu !== this.state.selectedMenu) {
      const state = this.state;
      let start = (state.pageNum - 1) *  state.pageSize;
      let limit = state.pageSize + start; 
      this.props.fetchListNews(start, limit, state.selectedMenu);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total !== this.props.total && nextProps.total > 0) {
      this.setState({
        total: nextProps.total
      })
    }
  }

  goToDetail = (id) => {
    this.props.updateViews(id);
    history.push({ pathname: `/news-detail?id=${id}`});
  }

  render() {
    const {
      selectedMenu,
      pageNum,
      pageSize,
      total
    } = this.state;
    return(
      <Layout >
        <div className='news-page'>
          <div className='news-banner'>
            <h3>KIẾN THỨC</h3>
          </div>
          <div className='news-content'>
            <div className='list-news'>
              <div className='title'>KIẾN THỨC</div>
              <hr />
              <div className='list-new-box'>
                {
                  this.props.listNews && this.props.listNews.length > 0 ? this.props.listNews.map((item, index) => {
                    return <div className='new-item' key={index}>
                      <img alt={`img-${index}`} src={item.img ? item.img : icNoImg}/>
                      <div className='title'>{item.title}</div>
                      <div className='new-des'>{item.des}</div>
                      <div className='new-footer'>
                        <span>{item.author ? item.author : 'Admin'}</span>
                        <i className="far fa-calendar-alt"></i>
                        <span>{item.date}</span>
                        <i className="far fa-eye"></i>
                        <span>{item.views ? item.views : 0}</span>
                      </div>
                      <div className='btn-detail' onClick={() => this.goToDetail(item.id)}>CHI TIẾT</div>
                    </div>
                  }) : <div className='error-no-data'>Không có dữ liệu</div>
                  
                }
              </div>
              <Pagination
                firstPageText={<img alt='btnStart' className='btn-Pagination' src={icArrowStart}/>}
                lastPageText={<img alt='btnEnd' className='btn-Pagination' src={icArrowEnd}/>}
                prevPageText={<img alt='btnBack' className='btn-Pagination' src={icArrowPrev}/>}
                nextPageText={<img alt='btnNext' className='btn-Pagination' src={icArrowNext}/>}
                activePage={pageNum}
                itemsCountPerPage={pageSize}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={this.onChangePageNum}
              />
            </div>
              <div className='box-news'>
              <div className='list-news-menu'>
                {
                  listNewMenu.map((item, index) => {
                    return <div key={index} onClick={ () => this.onSelectMenu(index + 1)}
                      className={selectedMenu === index + 1 ? 'news-menu-item selected' : 'news-menu-item'}>{item}
                    </div>
                  })
                }
              </div>
              <div className='list-news-top'>
                <div className='title'>CÁC BÀI VIẾT NỔI BẬT</div>
                <hr />
                {
                  this.props.listNewsTop.map((item, index) => {
                    return <div key={index} className='new-top-item'>
                      <img src={item.img ? item.img : icNoImg2} alt={`new-img-${index}`}/>
                      <div className='new-info'>
                        <div className='new-hot-title'>{item.title}</div>
                        <div className='new-info-footer'>
                          <span>{item.author}</span>
                          <i className="far fa-calendar-alt"></i>
                          <span>{item.date}</span>
                          <i className="far fa-eye"></i>
                          <span>{item.views}</span>
                        </div>
                      </div>
                    </div>
                  })
                }
              </div>
              <div className='list-news-top'>
                <div className='title'>CÁC BÀI VIẾT MỚI NHẤT</div>
                <hr />
                {
                  this.props.listNewsHot.map((item, index) => {
                    return <div key={index} className='new-top-item'>
                      <img src={item.img ? item.img : icNoImg2} alt={`new-img-${index}`}/>
                      <div className='new-info'>
                        <div className='new-hot-title'>{item.title}</div>
                        <div className='new-info-footer'>
                          <span>{item.author}</span>
                          <i className="far fa-calendar-alt"></i>
                          <span>{item.date}</span>
                          <i className="far fa-eye"></i>
                          <span>{item.views}</span>
                        </div>
                      </div>
                    </div>
                  })
                }
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
    listNews: state.News.listNews,
    total: state.News.total,
    listNewsHot: state.News.listNewsHot,
    listNewsTop: state.News.listNewsTop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListNews: (start, limit, category) => {
      dispatch(actions.listNews(start, limit, category));
    },
    fetchListNewsHot: () => {
      dispatch(actions.listNewsHot());
    },
    fetchlistNewsTop: () => {
      dispatch(actions.listNewsTop());
    },
    updateViews: (id) => {
      dispatch(actions.updateViews(id));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(News);