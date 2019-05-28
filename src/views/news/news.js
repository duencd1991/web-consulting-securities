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
import icArrowEnd from '../../assets/img/icArrowEnd.png'


const listNewMenu = [
  'Để đầu tư chứng khoán hiệu quả',
  'Theo dõi hiệu quả DM đầu tư Smart Money',
  'Cập nhật thị trường',
  'Tin khuyến mãi',
  'Thư viện',
  'Video'
]
const listNews = [
  {
    img: '',
    title: 'Chiến lược giao dịch trong ngày (day trading)',
    des: 'Thị trường Việt Nam hiện đã có sản phẩm phái sinh cho phép nhà đầu tư thực hiện chiến lược giao dịch trong ngày. Click để tìm hiểu chi tiết về chiến lược này.',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  },
  {
    img: '',
    title: 'Chiến lược giao dịch trong ngày (day trading)',
    des: 'Thị trường Việt Nam hiện đã có sản phẩm phái sinh cho phép nhà đầu tư thực hiện chiến lược giao dịch trong ngày. Click để tìm hiểu chi tiết về chiến lược này.',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  },
  {
    img: '',
    title: 'Chiến lược giao dịch trong ngày (day trading)',
    des: 'Thị trường Việt Nam hiện đã có sản phẩm phái sinh cho phép nhà đầu tư thực hiện chiến lược giao dịch trong ngày. Click để tìm hiểu chi tiết về chiến lược này.',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  },
  {
    img: '',
    title: 'Chiến lược giao dịch trong ngày (day trading)',
    des: 'Thị trường Việt Nam hiện đã có sản phẩm phái sinh cho phép nhà đầu tư thực hiện chiến lược giao dịch trong ngày. Click để tìm hiểu chi tiết về chiến lược này.',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  },
  {
    img: '',
    title: 'Chiến lược giao dịch trong ngày (day trading)',
    des: 'Thị trường Việt Nam hiện đã có sản phẩm phái sinh cho phép nhà đầu tư thực hiện chiến lược giao dịch trong ngày. Click để tìm hiểu chi tiết về chiến lược này.',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  },
  {
    img: '',
    title: 'Chiến lược giao dịch trong ngày (day trading)',
    des: 'Thị trường Việt Nam hiện đã có sản phẩm phái sinh cho phép nhà đầu tư thực hiện chiến lược giao dịch trong ngày. Click để tìm hiểu chi tiết về chiến lược này.',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  }
]
const listNewTop = [
  {
    img: '',
    title: 'Hướng dẫn cách chơi chứng khoán cho nhà đầu tư mới',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  },
  {
    img: '',
    title: 'Thông báo: Điều chỉnh phí giao dịch phái sinh tích hợp giao dịch phái sinh vào phần mềm cơ sở',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  },
  {
    img: '',
    title: 'Chứng quyền có bảo đảm là gì?',
    author: 'Admin',
    date: '04/10/2019',
    views: 112
  }
]

class News extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 0,
      pageNum: 1,
      pageSize: 1,
      total: listNews.length
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
                  listNews.map((item, index) => {
                    return <div className='new-item' key={index}>
                      <img alt={`img-${index}`} src={item.img ? item.img : icNoImg}/>
                      <div className='title'>{item.title}</div>
                      <div className='new-des'>{item.des}</div>
                      <div className='new-footer'>
                        <span>{item.author}</span>
                        <i className="far fa-calendar-alt"></i>
                        <span>{item.date}</span>
                        <i className="far fa-eye"></i>
                        <span>{item.views}</span>
                      </div>
                      <div className='btn-detail'>CHI TIẾT</div>
                    </div>
                  })
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
            {/* <div className='box-news'> */}
              
              {/* </div> */}
               <div className='box-news'>
               <div className='list-news-menu'>
                {
                  listNewMenu.map((item, index) => {
                    return <div key={index} onClick={ () => this.onSelectMenu(index)}
                      className={selectedMenu === index ? 'news-menu-item selected' : 'news-menu-item'}>{item}
                    </div>
                  })
                }
              </div>
              <div className='list-news-top'>
                <div className='title'>CÁC BÀI VIẾT NỔI BẬT</div>
                <hr />
                {
                  listNewTop.map((item, index) => {
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
                  listNewTop.map((item, index) => {
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps,mapDispatchToProps)(News);