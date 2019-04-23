import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import './tradingInstruction.scss';
import bgHDGD from '../../../assets/img/bg_huong_dan_giao_dich.jpg';

const listGuide = [
  {
    catalog: 'Hướng dẫn giao dịch CKPS',
    list: [
      {
        title: "Hướng dẫn mở tài khoản",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn giao dịch D24",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn lệnh điều kiện",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn chuyển TK sang kênh Online (áp dụng cho KH đã mở TK)",
        src: 'abc.com.vn'
      }
    ]
  },
  {
    catalog: 'Quy chuẩn hợp đồng tương lai',
    list: [
      {
        title: "Hướng dẫn mở tài khoản",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn giao dịch D24",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn lệnh điều kiện",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn chuyển TK sang kênh Online (áp dụng cho KH đã mở TK)",
        src: 'abc.com.vn'
      }
    ]
  },
  {
    catalog: 'Biểu phí giao dịch',
    list: [
      {
        title: "Hướng dẫn mở tài khoản",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn giao dịch D24",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn lệnh điều kiện",
        src: 'abc.com.vn'
      },
      {
        title: "Hướng dẫn chuyển TK sang kênh Online (áp dụng cho KH đã mở TK)",
        src: 'abc.com.vn'
      }
    ]
  }
]
const listTopGuide = [
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  },
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  },
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  },
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  },
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  },
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  },
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  },
  {
    title: "Hướng dẫn mở tài khoản chứng khoán cơ sở",
    url: "abc.com.vn"
  }
]

class TradingInstrucion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 0
    }
  }

  selectMenu = (index) => {
    let select = -1;
    if (this.state.selectedMenu !== index) {
      select = index;  
    }
    this.setState({
      selectedMenu: select
    })
  }

  render() {
    const {
      selectedMenu
    } = this.state;
    return(
      <Layout title="">
        <div className='trading-instruction-page'>
          <div className='banner'>
            <img alt='img' src={ bgHDGD } />
            <div className='title'>HƯỚNG DẪN GIAO DỊCH</div>
            <div className='sub-title'>CHỨNG KHOÁN PHÁI SINH</div>
          </div>
          <div className='content-box'>
            <div className='guide-menu'>
              <div className='title'>HƯỚNG DẪN GIAO DỊCH</div>
              <hr />
              <div className='list-menu-box'>
                {
                  listGuide.map((item, index) => {
                    return <ul key={index} className={selectedMenu === index? 'menu-item-box active' : 'menu-item-box'}>
                      {
                        selectedMenu === index ? <i className="fas fa-angle-up arrow" /> : <i className="fas fa-angle-down arrow" />
                      }
                      <li className={selectedMenu === index ? 'menu-catalog active' : 'menu-catalog' } onClick={()=>this.selectMenu(index)}>{ item.catalog}</li>
                      {
                        item.list.map((item, index) => {
                          return <li key={index}>
                            <i className="fas fa-angle-double-right"></i>
                            {item.title}
                          </li>
                        })
                      }
                    </ul>
                  })
                }
              </div>
            </div>
            <div className='top-guide'>
              <div className='title'>HƯỚNG DẪN ĐƯỢC XEM NHIỀU NHẤT</div>
              <ul className='box-top-guide'>
                {
                  listTopGuide.map((item, index) => {
                    return <li key={index}>
                      <i className="fas fa-angle-double-right"></i>
                      {
                        item.title
                      }
                    </li>
                  })
                }
              </ul>
              <div className='register-box'>
                <p className='register-text'>Bạn có <span>TÀI KHOẢN</span></p>
                <p className='register-text'>giao dịch <span>CHỨNG KHOÁN</span> chưa?</p>
                <button className='btn btn-register'>
                  <i className="far fa-user"></i>
                  MỞ TÀI KHOẢN
                </button>
              </div>
            </div>
            <div className='contact-box'>
              <div className='title'>LIÊN HỆ NHÂN VIÊN HỖ TRỢ</div>
              <hr />
              <div className='contact-content-box'>
                <div className='info-box'>
                  <div className='title'>PHÒNG DỊCH VỤ KHÁCH HÀNG ONLINE</div>
                  <div class='info-content'>
                    <i className="fas fa-map-marker-alt"></i>
                    <span className='info-address'>Số 3 Liễu Giai, Quận Ba Đình, Hà Nội</span>
                  </div>
                  <div className='info-content'>
                    <i className="fas fa-phone"></i>
                    <span className='info-hotline'>1900 9088</span>
                  </div>
                  <div className='info-content'>
                    <i className="fas fa-envelope"></i>
                    <span className='info-email'>cskh@mbs.com.vn</span>
                  </div>
                </div>
                <div className='msg-box'>
                  <div className='title'>GỬI LỜI NHẮN</div>
                  <input className='form-control msg-text' type='text' placeHolder='Họ và tên *'/>
                  <input className='form-control msg-text' type='text' placeHolder='Điện thoại *'/>
                  <input className='form-control msg-text' type='text' placeHolder='Email *'/>
                  <textarea class="form-control msg-text" rows="3" placeHolder='Nội dung *'/>

                  <button className='btn btn-send-msg'>
                    <i className="fas fa-paper-plane"></i>
                    GỬI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps,mapDispatchToProps)(TradingInstrucion);