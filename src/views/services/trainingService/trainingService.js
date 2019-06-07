import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import './trainingService.scss';
import icNoImg from '../../../assets/img/ic_no_img2.png';
import Slider from "react-slick";
import actions from '../../../store/trainingService/actions';
import { TYPE_COURSE, CATEGORY_COURSE } from '../../../utils/constant';

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
      selectedCourse: 0,
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

  onRegister = (id) => {
    alert('Đăng ký khóa học: ', id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCourse !== this.state.selectedCourse) {
      this.props.fetchlistCourseTop(this.state.selectedCourse);
    }
    if (prevState.selectedTypeCourse !== this.state.selectedTypeCourse) {
      this.props.fetchlistCourseCategory(this.state.selectedTypeCourse);
    }
  }

  componentDidMount() {
    const state = this.state;
    this.props.fetchListCourseHot(1);
    this.props.fetchlistCourseTop(state.selectedCourse);
    this.props.fetchlistCourseCategory(state.selectedTypeCourse);
  }

  render() {
    const {
      selectedCourse,
      selectedTypeCourse,
      activeCourse
    } = this.state;
    const props = this.props;
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
                    {
                      TYPE_COURSE.map((item, index) => {
                        return <div key={index} className={selectedCourse === item.type ? 'type-course active' : 'type-course'}
                          onClick={() => this.onChangeSelectCourse(item.type)} >{item.name}</div>
                      })
                    }
                  </div>
                  <div className='list-course'>
                    {
                      props.listCourseTop.map((item, index) => {
                        return <div key={index} className='course-item'>
                          <div className='time'>KHAI GIẢNG<br /><span>{item.startDate}</span></div>
                          <div className='title'>{item.name}</div>
                          <div className='box-left'>
                            <div className='course-title'>Thời gian: <span>{item.schedule}</span></div>
                            <div className='course-title'>Giảng viên: <span>{item.teacher}</span></div>
                            <div className='course-title'>Địa điểm: <span>{item.address}</span></div>
                          </div>
                          <div className='box-right'>
                            <div className='course-title'>Khai giảng: <span>{item.startDate}</span></div>
                            <div className='course-title'>Hình thức học: <span>
                            {
                              TYPE_COURSE.map(course => {
                                if (item.type === course.type) {
                                  return course.name;
                                }
                                return null;
                              })
                            }
                            </span></div>
                            <div className='course-title'>Chi phí: <span>{item.fee}</span></div>
                          </div>
                          <div className='course-des'>{item.description}<i className="fas icAdMore"></i></div>
                          <div className='course-footer'>

                            File download: <a className='file-download' href={item.url}><i className="fas icPdf"></i>
                            </a>
                            <div className='url-register'>Click tham gia: <span><span className="regLean" onClick={() => this.onRegister(item.id)}>Đăng ký học</span></span></div>
                          </div>
                        </div>
                      })
                    }
                  </div>
                </div>
                <div className='hot-course'>
                  <div className='hot-title'>KHÓA HỌC HOT</div>
                  {
                    props.listCourseHot.map((item, index) => {
                      return <React.Fragment key={index}>
                        {
                          activeCourse === index ? <div className='course-item active' key={index}>

                            <div className='course-name' onClick={() => this.onChangeSelectHotCourse(index)}>
                              <div className='course-index'>{index + 1}</div>
                              <span>{item.name}</span></div>
                            <div className='box-left'>
                              <div className='course-title'>Thời gian: <span>{item.schedule}</span></div>
                              <div className='course-title'>Giảng viên: <span>{item.teacher}</span></div>
                              <div className='course-title'>Địa điểm: <span>{item.address}</span></div>
                            </div>
                            <div className='box-right'>
                              <div className='course-title'>Khai giảng: <span>{item.startDate}</span></div>
                              <div className='course-title'>Hình thức học: <span>
                                {
                                  TYPE_COURSE.map(course => {
                                    if (item.type === course.type) {
                                      return course.name;
                                    }
                                    return null;
                                  })
                                }
                              </span></div>
                              <div className='course-title'>Chi phí: <span>{item.fee}</span></div>
                            </div>
                            <div className='course-des'>{item.des}<i className="fas icAdMore"></i></div>
                            <div className='course-footer'>

                              File download: <a className='file-download' href={item.url}><i className="fas icPdf"></i>
                              </a>
                              <div className='url-register'>Click tham gia: <span><span className="regLean" onClick={() => this.onRegister(item.id)}>Đăng ký học</span></span></div>
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
                CATEGORY_COURSE.map((item, index) => {
                  return <div key={index} className={selectedTypeCourse === item.cat ? 'item-type-course selected' : 'item-type-course'}
                    onClick={() => this.onChangeSelectTypeCourse(item.cat)}>{item.name}
                  </div>
                })
              }
            </div>
            <div className="type-course-list">
              {
                props.listCourseCategory.map((course, index) => {
                  return <div className='item-course' key={index}>
                    <div className='course-index'>{index + 1}</div>
                    <div className='sqrL'></div>
                    <div className='course-name'>{course.name}</div>
                    <div className='course-date-time-cost'>Thời gian: <span>{course.schedule}</span></div>
                    <div className='course-date-time-cost'>Khai giảng: <span>{course.startDate}</span></div>
                    <div className='course-date-time-cost'>Chi phí: <span>{course.fee}</span></div>
                    <div className='course-des'>{course.description}</div>
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
                            <td>{course.startDate}</td>
                            <td>{course.teacher}</td>
                            <td>
                              {
                                  TYPE_COURSE.map(item => {
                                    if (item.type === course.type) {
                                      return item.name;
                                    }
                                    return null;
                                  })
                                }
                            </td>
                            <td>{course.address}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className='file-download'>
                        File download:
                    <a href={course.urlFile}><i className="fas icExcel"></i></a>
                      </div>
                      <div className='url-register'>Để tham gia bạn click: <span className='btn_regis' onClick={() => this.onRegister(course.id)}>Đăng ký học</span></div>

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
  return {
    listCourseHot: state.TrainingService.listCourseHot,
    listCourseCategory: state.TrainingService.listCourseCategory,
    listCourseTop: state.TrainingService.listCourseTop,
    total: state.TrainingService.total,
    detail: state.TrainingService.detail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListCourse: (start, limit, type, category, priority) => {
      dispatch(actions.listCourse(start, limit, type, category, priority));
    },
    fetchListCourseHot: (priority) => {
      dispatch(actions.listCourseHot(priority));
    },
    fetchlistCourseTop: (type) => {
      dispatch(actions.listCourseTop(type));
    },
    fetchlistCourseCategory: (category) => {
      dispatch(actions.listCourseCategory(category));
    },
    getDetail: (id) => {
      dispatch(actions.getDetail(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrainingService);