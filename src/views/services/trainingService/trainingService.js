import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import './trainingService.scss';
import icBanner from '../../../assets/img/ic-banner-training.jpg';

const listCourseHot = [
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
  {
    title: "Phân tích kỹ thuật cho người mới bắt đầu",
    src: 'abc.com.vn'
  },
]
const listCourseOnline = [
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 109",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  },
  {
    title: "Hướng dẫn giao dịch mua bán ETF - ETF  104",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  },
  {
    title: "Hướng dẫn giao dịch mua bán ETF - ETF  104",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  }
]
const listCourseOffline = [
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108 (Offline)",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108 (Offline)",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  },
  {
    title: "Hướng dẫn giao dịch mua bán ETF - ETF  104 (Offline)",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  },
  {
    title: "Hướng dẫn giao dịch mua bán ETF - ETF  104 (Offline)",
    start: "24/6",
    calendar: "18h30 - 21h thứ 2, 4, 6 hàng tuần"
  }
]
class TrainingService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCourse: "Online"
    }
  }

  onChangeSelectCourse = (type) => {
    this.setState({
      selectedCourse: type
    })
  }

  render() {
    return(
      <Layout title="">
        <div className='training-service-page'>
          <div className='banner'>
            <img alt='img' src={ icBanner }/>
          </div>
          <div className='course-box'>
            <div className='title'>DANH SÁCH KHÓA HỌC</div>
            <hr />
            <div className='list-course-box'>
              <div className='select-course-type'>
                <div className={this.state.selectedCourse === 'Online' ? 'type-course active' : 'type-course'} onClick={() => this.onChangeSelectCourse('Online')} >Khóa học Online</div>
                <div className={this.state.selectedCourse === 'Offline' ? 'type-course active' : 'type-course'} onClick={() => this.onChangeSelectCourse('Offline')} >Khóa học Offline</div>
              </div>
              {
                this.state.selectedCourse === "Online" ? <div className='list-course'>
                  {
                    listCourseOnline.map((item, index) => {
                      return <div key={index} className='course-item'>
                        <div className='start-time'><span>KHAI GIẢNG</span>{item.start}</div>
                        <div className='title'>{item.title}</div>
                        <div className='calendar'>{item.calendar}</div>
                      </div>
                    })
                  }
                </div> : <div className='list-course'>
                  {
                    listCourseOffline.map((item, index) => {
                      return <div key={index} className='course-item'>
                        <div className='start-time'><span>KHAI GIẢNG</span>{item.start}</div>
                        <div className='title'>{item.title}</div>
                        <div className='calendar'>{item.calendar}</div>
                      </div>
                    })
                  }
                </div>
              }
              
            </div>
            <div className='hot-course'>
              <div className='title'>KHÓA HỌC HOT</div>
              {
                listCourseHot.map((item, index) => {
                  return <div className='row-course' key={index}>
                    <div className='course-index'>{index}</div>
                    <div className='course-name'>{item.title}</div>
                  </div>
                })
              }
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

export default connect(mapStateToProps,mapDispatchToProps)(TrainingService);