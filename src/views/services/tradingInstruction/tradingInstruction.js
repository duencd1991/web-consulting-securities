import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import './tradingInstruction.scss';
import bgHDGD from '../../../assets/img/bg_huong_dan_giao_dich.jpg';
import ContactBox from '../../../components/contactBox/contactBox';

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
            <div className='contact-box-layout'>
              <div className='title'>LIÊN HỆ NHÂN VIÊN HỖ TRỢ</div>
              <hr />
              <ContactBox />
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