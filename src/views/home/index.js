import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './home.scss';
import Layout from '../layout/layout';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';
import noImg from '../../assets/img/imgThum.png';
import icFile from '../../assets/img/icPdf.png';

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
const listMenu = ['HƯỚNG DẪN TỰ GIAO DỊCH', 'BÁO CÁO PHÂN TÍCH', 'ĐÀO TẠO', 'TƯ VẤN ĐẦU TƯ'];
const listNew = [
  {
    img: noImg,
    title: "Nhà đầu tư nhận được gì khi mở tài khoản mới"
  },
  {
    img: noImg,
    title: "Hai cách để trở thành nhà đầu tư chứng khoán tài ba và lỗi lạc, chắc là lầm lỗi =))"
  },
  {
    img: noImg,
    title: "Chứng quyền có đảm bảo là gì?"
  },
  {
    img: noImg,
    title: "Hướng dẫn cách chơi chứng khoán phái sinh và cắt lỗ khi sóng đánh tụt quần"
  },
  {
    img: noImg,
    title: "Hướng dẫn cách chơi chứng khoán cho nhà đầu tư mới"
  }
]
const listReport = [
  {
    title: "Điểm đến dòng tiền - 05.04.19",
    src: "#"
  },
  {
    title: "Thống kê giao dịch 13h30 - 11.04.19",
    src: "#"
  },
  {
    title: "Market trend 11.04.2019 - Bản tin trưa 12.30pm",
    src: "#"
  },
  {
    title: "Breaking News - 11.04.19",
    src: "#"
  },
  {
    title: "Thống kê giao dịch chung và riêng tại sàn nội bộ và sàn ảo",
    src: "#"
  },
  {
    title: "Market trend 11.04.2019 - Bản tin trưa 12.30pm",
    src: "#"
  },
  {
    title: "Breaking News - 11.04.19",
    src: "#"
  },
  {
    title: "Thống kê giao dịch chung và riêng tại sàn nội bộ và sàn ảo",
    src: "#"
  },
  {
    title: "Breaking News - 11.04.19",
    src: "#"
  },
  {
    title: "Thống kê giao dịch chung và riêng tại sàn nội bộ và sàn ảo",
    src: "#"
  }
]
const listGuide = [
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    src: "#"
  },
  {
    title: "Giới thiệu chung về Giao dịch ký quỹ",
    src: "#"
  },
  {
    title: "Hướng dẫn tải ứng dụng HSC Trade trên Iphone và Android, Window-Phone",
    src: "#"
  },
  {
    title: "Quy định giao dịch của Sở giao dịch chứng khoán MBS",
    src: "#"
  },
  {
    title: "Hướng dẫn lưu lý chứng khoán",
    src: "#"
  },
  {
    title: "Các quyền phát sinh từ cổ phiếu",
    src: "#"
  },
  {
    title: "Hướng dẫn tải ứng dụng HSC Trade trên Iphone và Android, Window-Phone",
    src: "#"
  },
  {
    title: "Quy định giao dịch của Sở giao dịch chứng khoán MBS",
    src: "#"
  },
  {
    title: "Hướng dẫn lưu lý chứng khoán",
    src: "#"
  },
  {
    title: "Hướng dẫn tải ứng dụng HSC Trade trên Iphone và Android, Window-Phone",
    src: "#"
  },
  {
    title: "Quy định giao dịch của Sở giao dịch chứng khoán MBS",
    src: "#"
  },
  {
    title: "Hướng dẫn lưu lý chứng khoán",
    src: "#"
  }
]
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
                    { menu }
                    {
                      selectedMenu === index ? <i className="fas ic_Sub" /> : <i className="fas ic_Add" />
                    }
                    <div className={selectedMenu === index ? 'sub-menu-show' : 'sub-menu-hiden'}>

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
                    listNew.map((item, index) => {
                      return <div className='new-content'>
                        <img className='new-content-img' alt={`news-${index}`} src={item.img}/>
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
                    listReport.map((item, index) => {
                      return <div className='file-contents'>
                        <img alt={`report-${index}`} src={icFile}/>
                        <a href={`/report-${index}`} className='file-content-text'>{item.title}</a>
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
                    listGuide.map((item, index) => {
                      return <div className='file-contents'>
                        <img alt={`file-${index}`} src={icFile}/>
                        <a href={`/file-${index}`} className='file-content-text'>{item.title}</a>
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

export default withTranslation()(Home);
