import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './home.scss';
import Layout from '../layout/layout';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';
import noImg from '../../assets/img/imgThum.png';
import icFile from '../../assets/img/icPdf.png';
import actions from '../../store/home/actions';

const listBanner = [
  {
    img: banner1,
    title: "HƯỚNG DẪN ĐẦU TƯ PHÁI SINH",
    url: "#"
  },
  {
    img: banner2,
    title: "HƯỚNG DẪN GIAO DỊCH TỰ ĐỘNG",
    url: "#"
  },
  {
    img: banner3,
    title: "ĐĂNG KÝ NGAY",
    url: "#"
  }
];
const listMenu = [
  {
    link: '/trading-instruction',
    name: 'HƯỚNG DẪN TỰ GIAO DỊCH'
  },
  {
    link: '/report',
    name: 'BÁO CÁO PHÂN TÍCH'
  },
  {
    link: '/training-service',
    name: 'ĐÀO TẠO'
  },
  {
    link: '/consulting',
    name: 'TƯ VẤN ĐẦU TƯ'
  }
];

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 0,
      index: 0,
      direction: null
    }
  }

  selectMenu = (index) => {
    this.setState({
      selectedMenu: index
    })
  }
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }
  
  componentDidMount() {
    this.props.fetchNews();
    this.props.fetchGuideLines();
    this.props.fetchReports();
  }

  render() {
    const {
      selectedMenu,
      index,
      direction
    } = this.state;
    return (
      <Layout title="">
        <div className='home-page'>
          <div className='home-slider-menu'>
            <div className='home-slider'>
              <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                // interval={1000}
              >
              {
                listBanner.map((item, index) => {
                  return <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.img}
                      alt="banner"
                    />
                    <Carousel.Caption>
                      <div className='banner-title'>{item.title}</div>
                      <ul>
                        <li>Buổi 1: Giới thiệu về CKPS ...</li>
                        <li>Buổi 2: Các chiến lược giao dịch ...</li>
                        <li>Buổi 3: Hướng dẫn thao tác ...</li>
                        <li>Buổi 4: Giao dịch thực tế cùng MBS ...</li>
                      </ul>
                      <button className='btn banner-detail'>XEM CHI TIẾT</button>
                    </Carousel.Caption>
                  </Carousel.Item>
                })
              }
              </Carousel>
            </div>
            <div className='home-menu'>
              {
                listMenu.map((menu, index) => {
                  return <div className={selectedMenu === index ? 'home-menu-item active':'home-menu-item'}
                    onClick={()=>this.selectMenu(index)} >
                    { menu.name }
                    {
                      selectedMenu === index ? <i className="fas ic_Sub" /> : <i className="fas ic_Add" />
                    }
                    <div className={selectedMenu === index ? 'sub-menu-show' : 'sub-menu-hiden'}>
                      <a href={menu.link} className='btn_readMore'>Xem thêm</a>
                    </div>
                  </div>
                }) 
              }
            </div>
          </div>
          <div className='box-news'>
            <div className='box-width-limit'>
              <div className='box-new-item' id='box-new'>
                <div className='title'>
                  <span className='header'>KIẾN THỨC </span>
                  <span className='normal'>ĐẦU TƯ</span>
                </div>
                <hr />
                <div className='box-new-contents'>
                  {
                    this.props.listNews.map((item, index) => {
                      return <div className='new-content'>
                        <img className='new-content-img' alt={`news-${index}`} src={item.img ? item.img : noImg}/>
                        <a href={`/new-${index}`} className='new-content-text'>{item.title}</a>
                      </div>
                    })
                  }
                </div>
              </div>
              <div className='box-new-item'>
                <div className='title'>
                  <span className='header'>BÁO CÁO </span>
                  <span className='normal'>PHÂN TÍCH</span>
                </div>
                <hr />
                <div className='box-files'>
                  {
                    this.props.listReports.map((item, index) => {
                      return <div className='file-contents'>
                        <img alt={`report-${index}`} src={icFile}/>
                        <a href={`/report-${index}`} className='file-content-text'>{item.name}</a>
                      </div>
                    })
                  }
                </div>
              </div>
              <div className='box-new-item'>
                <div className='title'>
                  <span className='header'>HƯỚNG DẪN </span>
                  <span className='normal'>GD ĐƯỢC XEM NHIỀU NHẤT</span>
                </div>
                <hr />
                <div className='box-files'>
                  {
                    this.props.listGuidelines.map((item, index) => {
                      return <div className='file-contents'>
                        <img alt={`file-${index}`} src={icFile}/>
                        <a href={`/file-${index}`} className='file-content-text'>{item.name}</a>
                      </div>
                    })
                  }
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
    listNews: state.Home.listNews,
    listReports: state.Home.listReports,
    listGuidelines: state.Home.listGuidelines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => {
      dispatch(actions.listNews());
    },
    fetchGuideLines: () => {
      dispatch(actions.listGuidelines());
    },
    fetchReports: () => {
      dispatch(actions.listReports());
    }
  }
};

export default compose(
  withTranslation(),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);