import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import './trainingService.scss';
import icNoImg from '../../../assets/img/ic_no_img2.png';
import Slider from "react-slick";

const listCourseOnline = [
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    startDate: '08/5',
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Online",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    startDate: '24/6',
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Online",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    startDate: '24/6',
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Online",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    startDate: '24/6',
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Online",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  }

]
const listCourseOffline = [
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Offline",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Offline",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Offline",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  },
  {
    title: "Khóa học hướng dẫn giao dịch mua bán Cổ phiếu - Lớp CKCS 108",
    time: "18:00 (8, 12, 26/5/2019)",
    date: "8/5/2019",
    teacher: "Nguyễn Thế Phong",
    type: "Offline",
    addr: "Tp. Hà Nội",
    cost: "3.000.000 VNĐ",
    des: "Các nhà đầu tư, các bạn sinh viên muốn tham gia đầu tư vào Thị trường Chứng khoán nhưng chưa biết gì về thị trường ...",
    urlFile: "abc.com.vn"
  }
]
const listTypecourse = [
  'ĐÀO TẠO SẢN PHẨM',
  'ĐÀO TẠO CƠ BẢN',
  'ĐÀO TẠO KỸ THUẬT',
  'TÂM LÝ ĐẦU TƯ'
]
const listTeachers = [
  {
    img: '',
    name: 'NGUYỄN THỊ MINH THƯ',
    title: 'CEO & FOUNDER',
    detail: 'Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu'
  },
  {
    img: '',
    name: 'NGUYỄN THỊ MINH THƯ',
    title: 'CEO & FOUNDER',
    detail: 'Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu'
  },
  {
    img: '',
    name: 'NGUYỄN THỊ MINH THƯ',
    title: 'CEO & FOUNDER',
    detail: 'Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu'
  },
  {
    img: '',
    name: 'NGUYỄN THỊ MINH THƯ',
    title: 'CEO & FOUNDER',
    detail: 'Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu'
  }
]

class TrainingService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCourse: "Online",
      selectedTypeCourse: 0,
      activeCourse: 0
    }
  }

  onChangeSelectCourse = (type) => {
    this.setState({
      selectedCourse: type
    })
  }
  onChangeSelectTypeCourse = (index) => {
    this.setState({
      selectedTypeCourse: index
    })
  }
  onChangeSelectHotCourse = (index) => {
    this.setState({
      activeCourse: index
    })
  }

  render() {
    const {
      selectedCourse,
      selectedTypeCourse,
      activeCourse
    } = this.state;
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      centerMode: true
    };
    return (
      <Layout title="">
        <div className='training-service-page'>
          <div className='banner'>
            <div className='title-banner'>DỊCH VỤ ĐÀO TẠO</div>
          </div>
          <div className='course-layout'>
            <div className='course-box'>
              <div className='course-content'>
                <div className='list-course-box'>
                  <div className='select-course-type'>
                    <div className={selectedCourse === 'Online' ? 'type-course active' : 'type-course'} onClick={() => this.onChangeSelectCourse('Online')} >Khóa học Online</div>
                    <div className={selectedCourse === 'Offline' ? 'type-course active' : 'type-course'} onClick={() => this.onChangeSelectCourse('Offline')} >Khóa học Offline</div>
                  </div>
                  {
                    selectedCourse === "Online" ? <div className='list-course'>
                      {
                        listCourseOnline.map((item, index) => {
                          return <div key={index} className='course-item'>
                            <div className='time'>KHAI GIẢNG<br /><span>{item.startDate}</span></div>
                            <div className='title'>{item.title}</div>
                            <div className='box-left'>
                              <div className='course-title'>Thời gian: <span>{item.time}</span></div>
                              <div className='course-title'>Giảng viên: <span>{item.teacher}</span></div>
                              <div className='course-title'>Địa điểm: <span>{item.addr}</span></div>
                            </div>
                            <div className='box-right'>
                              <div className='course-title'>Khai giảng: <span>{item.date}</span></div>
                              <div className='course-title'>Hình thức học: <span>{item.type}</span></div>
                              <div className='course-title'>Chi phí: <span>{item.cost}</span></div>
                            </div>
                            <div className='course-des'>{item.des}<i class="fas icAdMore"></i></div>
                            <div className='course-footer'>

                              File download: <a className='file-download' href={item.urlFile}><i class="fas icPdf"></i>
                              </a>
                              <div className='url-register'>Click tham gia: <span><a class="regLean" href='abc.com'>Đăng ký học</a></span></div>
                            </div>
                          </div>
                        })
                      }
                    </div> : <div className='list-course'>
                        {
                          listCourseOffline.map((item, index) => {
                            return <div key={index} className='course-item'>
                              {/* <div className='start-time'><span>KHAI GIẢNG</span>{item.start}</div>
                            <div className='title'>{item.title}</div>
                            <div className='calendar'>{item.calendar}</div> */}
                            </div>
                          })
                        }
                      </div>
                  }
                </div>
                <div className='hot-course'>
                  <div className='hot-title'>KHÓA HỌC HOT</div>
                  {
                    listCourseOnline.map((item, index) => {
                      return <React.Fragment>
                        {
                          activeCourse === index ? <div className='course-item active' key={index}>

                            <div className='course-name' onClick={() => this.onChangeSelectHotCourse(index)}>
                              <div className='course-index'>{index + 1}</div>
                              <span>{item.title}</span></div>
                            <div className='box-left'>
                              <div className='course-title'>Thời gian: <span>{item.time}</span></div>
                              <div className='course-title'>Giảng viên: <span>{item.teacher}</span></div>
                              <div className='course-title'>Địa điểm: <span>{item.addr}</span></div>
                            </div>
                            <div className='box-right'>
                              <div className='course-title'>Khai giảng: <span>{item.date}</span></div>
                              <div className='course-title'>Hình thức học: <span>{item.type}</span></div>
                              <div className='course-title'>Chi phí: <span>{item.cost}</span></div>
                            </div>
                            <div className='course-des'>{item.des}<i class="fas icAdMore"></i></div>
                            <div className='course-footer'>

                              File download: <a className='file-download' href={item.urlFile}><i class="fas icPdf"></i>
                              </a>
                              <div className='url-register'>Click tham gia: <span><a class="regLean" href='abc.com'>Đăng ký học</a></span></div>
                            </div>
                          </div> :
                            <div className='course-item' onClick={() => this.onChangeSelectHotCourse(index)}>
                              <div className='course-name' ><div className='course-index'>{index + 1}</div>{item.title}</div>
                            </div>
                        }
                      </React.Fragment>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='type-course-layout'>
            <div className='title'>DANH SÁCH CÁC KHÓA HỌC</div>
            <hr />
            <div className='select-type-course'>
              {
                listTypecourse.map((type, index) => {
                  return <div className={selectedTypeCourse === index ? 'item-type-course selected' : 'item-type-course'}
                    onClick={() => this.onChangeSelectTypeCourse(index)}>{type}
                  </div>
                })
              }
            </div>
            <div className="type-course-list">
              {
                listCourseOnline.map((course, index) => {
                  return <div className='item-course'>
                    <div className='course-index'>{index + 1}</div>
                    <div className='sqrL'></div>
                    <div className='course-name'>{course.title}</div>
                    <div className='course-date-time-cost'>Thời gian: <span>{course.time}</span></div>
                    <div className='course-date-time-cost'>Khai giảng: <span>{course.date}</span></div>
                    <div className='course-date-time-cost'>Chi phí: <span>{course.cost}</span></div>
                    <div className='course-des'>{course.des}</div>
                    <div className='blInfo'>
                      <table>
                        <thead>
                          <tr>
                            <th scope='col'>Khai giảng</th>
                            <th scope='col'>Giảng viên</th>
                            <th scope='col'>Hình thức học</th>
                            <th scope='col'>Địa điểm</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{course.date}</td>
                            <td>{course.teacher}</td>
                            <td>{course.type}</td>
                            <td>{course.addr}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className='file-download'>
                        File download:
                    <a href={course.urlFile}><i class="fas icExcel"></i></a>
                      </div>
                      <div className='url-register'>Để tham gia bạn click: <a className='btn_regis' href='abc.com'>Đăng ký học</a></div>

                    </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className='teachers-layout'>
            <div className='teachers-title'>ĐỘI NGŨ GIẢNG VIÊN</div>
            <hr />
            <div className='teacher-des'>Đội ngũ giảng viên của MBS tập hợp những chuyên gia hàng đầu trên thị trường chứng khoán với kho kiến thức sâu rộng cùng kinh nghiệm giao dịch lâu năm</div>
            <div className='teacher-special'>CHUYÊN GIA TƯ VẤN</div>
            <Slider {...settings}>
              {
                listTeachers.map((item, index) => {
                  return <div key={index}>
                    <img src={item.img ? item.img : icNoImg} alt={`img-${index}`} />
                    <div className='teacher-name'>{item.name}</div>
                    <div className='teacher-title'>{item.title}</div>
                    <div className='teacher-detail'>{item.detail}</div>
                  </div>
                })
              }
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrainingService);