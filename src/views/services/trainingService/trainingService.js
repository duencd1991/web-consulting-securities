import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import "./trainingService.scss";
import actions from "../../../store/trainingService/actions";
import expertActions from "../../../store/expert/actions";
import notifyActions from "../../../store/notification/actions";
import { toast } from "react-toastify";
import { TYPE_COURSE, CATEGORY_COURSE } from "../../../utils/constant";
import RegisterPopup from "./registerPopup";
import ExpertBox from "../../../components/expertBox/expertBox";
import { currency } from "../../../utils/currency";

class TrainingService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCourse: 1,
      selectedTypeCourse: 1,
      activeCourse: 1,
      showPopup: false,
      objCourse: null,
      showMore: null
    };
  }

  onShowMore = index => {
    let nextShow = null;
    if (this.state.showMore !== index) {
      nextShow = index;
    }
    this.setState(state => ({
      showMore: nextShow
    }));
  };
  onChangeSelectCourse = type => {
    this.setState({
      selectedCourse: type
    });
  };
  onChangeSelectTypeCourse = index => {
    this.setState({
      selectedTypeCourse: index
    });
  };
  onChangeSelectHotCourse = index => {
    this.setState({
      activeCourse: index
    });
  };
  onRegister = course => {
    this.setState({
      showPopup: true,
      objCourse: course
    });
  };
  onCloseRegister = () => {
    this.setState({
      showPopup: false,
      objCourse: null
    });
  };
  onSubmitRegister = data => {
    this.props.registerCourse(data);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      this.props.clearNotify();
    }
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
    const data = {
      start: 0,
      limit: 10
    };
    this.props.fetchListExpert(data);
  }

  render() {
    const {
      selectedCourse,
      selectedTypeCourse,
      activeCourse,
      showPopup,
      objCourse,
      showMore
    } = this.state;
    const props = this.props;
    return (
      <Layout title="">
        {
          <RegisterPopup
            isShowModal={showPopup}
            title="Tiêu đề"
            courseInfo={objCourse}
            closePopup={this.onCloseRegister}
            onSubmit={this.onSubmitRegister}
          />
        }
        <div className="training-service-page">
          <div className="banner">
            <div className="title-banner">DỊCH VỤ ĐÀO TẠO</div>
          </div>
          <div className="course-layout">
            <div className="course-box">
              <div className="course-content">
                <div className="list-course-box">
                  <div className="select-course-type">
                    {TYPE_COURSE.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            selectedCourse === item.type
                              ? "type-course active"
                              : "type-course"
                          }
                          onClick={() => this.onChangeSelectCourse(item.type)}
                        >
                          {item.name}
                        </div>
                      );
                    })}
                  </div>
                  <div className="list-course">
                    {props.listCourseTop.map((item, index) => {
                      return (
                        <div key={index} className="course-item">
                          <div className="time">
                            KHAI GIẢNG
                            <br />
                            <span>{item.startDate}</span>
                          </div>
                          <div className="title">{item.name}</div>
                          <div className="box-left">
                            <div className="course-title">
                              Thời gian: <span>{item.schedule}</span>
                            </div>
                            <div className="course-title">
                              Giảng viên: <span>{item.teacher}</span>
                            </div>
                            <div className="course-title">
                              Địa điểm: <span>{item.address}</span>
                            </div>
                          </div>
                          <div className="box-right">
                            <div className="course-title">
                              Khai giảng: <span>{item.startDate}</span>
                            </div>
                            <div className="course-title">
                              Hình thức học:{" "}
                              <span>
                                {TYPE_COURSE.map(course => {
                                  if (item.type === course.type) {
                                    return course.name;
                                  }
                                  return null;
                                })}
                              </span>
                            </div>
                            <div className="course-title">
                              Chi phí: <span>{currency(item.fee)} VNĐ</span>
                            </div>
                          </div>
                          <div
                            className={
                              showMore === index
                                ? "course-des show-more"
                                : "course-des"
                            }
                          >
                            {item.description}
                          </div>
                          <div>
                            <i
                              className={
                                showMore === index
                                  ? "fas icSubMore"
                                  : "fas icAdMore"
                              }
                              onClick={() => this.onShowMore(index)}
                            ></i>
                          </div>
                          <div className="course-footer">
                            File download:{" "}
                            <a className="file-download"
                              target="_blank"
                              rel="noopener noreferrer" href={item.url}>
                              <i className="fas icPdf"></i>
                            </a>
                            <div className="url-register">
                              Click tham gia:{" "}
                              <span>
                                <span
                                  className="regLean"
                                  onClick={() => this.onRegister(item)}
                                >
                                  Đăng ký học
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="hot-course">
                  <div className="hot-title">KHÓA HỌC HOT</div>
                  {props.listCourseHot.map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        {activeCourse === index ? (
                          <div className="course-item active" key={index}>
                            <div
                              className="course-name"
                              onClick={() =>
                                this.onChangeSelectHotCourse(index)
                              }
                            >
                              <div className="course-index">{index + 1}</div>
                              <span>{item.name}</span>
                            </div>
                            <div className="box-left">
                              <div className="course-title">
                                Thời gian: <span>{item.schedule}</span>
                              </div>
                              <div className="course-title">
                                Giảng viên: <span>{item.teacher}</span>
                              </div>
                              <div className="course-title">
                                Địa điểm: <span>{item.address}</span>
                              </div>
                            </div>
                            <div className="box-right">
                              <div className="course-title">
                                Khai giảng: <span>{item.startDate}</span>
                              </div>
                              <div className="course-title">
                                Hình thức học:{" "}
                                <span>
                                  {TYPE_COURSE.map(course => {
                                    if (item.type === course.type) {
                                      return course.name;
                                    }
                                    return null;
                                  })}
                                </span>
                              </div>
                              <div className="course-title">
                                Chi phí: <span>{currency(item.fee)} VNĐ</span>
                              </div>
                            </div>
                            <div className="course-des">
                              {item.des}
                              <i className="fas icAdMore"></i>
                            </div>
                            <div className="course-footer">
                              File download:{" "}
                              <a className="file-download"
                                target="_blank"
                                rel="noopener noreferrer" href={item.url}>
                                <i className="fas icPdf"></i>
                              </a>
                              <div className="url-register">
                                Click tham gia:{" "}
                                <span>
                                  <span
                                    className="regLean"
                                    onClick={() => this.onRegister(item)}
                                  >
                                    Đăng ký học
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="course-item"
                            onClick={() => this.onChangeSelectHotCourse(index)}
                          >
                            <div className="course-name">
                              <div className="course-index">{index + 1}</div>
                              {item.title}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="type-course-layout">
            <div className="title">DANH SÁCH CÁC KHÓA HỌC</div>
            <hr />
            <div className="select-type-course">
              {CATEGORY_COURSE.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      selectedTypeCourse === item.cat
                        ? "item-type-course selected"
                        : "item-type-course"
                    }
                    onClick={() => this.onChangeSelectTypeCourse(item.cat)}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
            <div className="type-course-list">
              {props.listCourseCategory.map((course, index) => {
                return (
                  <div className="item-course" key={index}>
                    <div className="course-index">{index + 1}</div>
                    <div className="sqrL"></div>
                    <div className="course-name">{course.name}</div>
                    <div className="course-date-time-cost">
                      Thời gian: <span>{course.schedule}</span>
                    </div>
                    <div className="course-date-time-cost">
                      Khai giảng: <span>{course.startDate}</span>
                    </div>
                    <div className="course-date-time-cost">
                      Chi phí: <span>{currency(course.fee)} VNĐ</span>
                    </div>
                    <div className="course-des">{course.description}</div>
                    <div className="blInfo">
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">Khai giảng</th>
                            <th scope="col">Giảng viên</th>
                            <th scope="col">Hình thức học</th>
                            <th scope="col">Địa điểm</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{course.startDate}</td>
                            <td>{course.teacher}</td>
                            <td>
                              {TYPE_COURSE.map(item => {
                                if (item.type === course.type) {
                                  return item.name;
                                }
                                return null;
                              })}
                            </td>
                            <td>{course.address}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="file-download">
                        File download:
                        <a href={course.urrl}
                          target="_blank"
                          rel="noopener noreferrer">
                          <i className="fas icExcel"></i>
                        </a>
                      </div>
                      <div className="url-register">
                        Để tham gia bạn click:{" "}
                        <span
                          className="btn_regis"
                          onClick={() => this.onRegister(course)}
                        >
                          Đăng ký học
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ExpertBox listExpert={props.listExpert} />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    listCourseHot: state.TrainingService.listCourseHot,
    listCourseCategory: state.TrainingService.listCourseCategory,
    listCourseTop: state.TrainingService.listCourseTop,
    listExpert: state.Expert.listExpert,
    total: state.TrainingService.total,
    detail: state.TrainingService.detail,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListCourse: (start, limit, type, category, priority) => {
      dispatch(actions.listCourse(start, limit, type, category, priority));
    },
    fetchListCourseHot: priority => {
      dispatch(actions.listCourseHot(priority));
    },
    fetchlistCourseTop: type => {
      dispatch(actions.listCourseTop(type));
    },
    fetchlistCourseCategory: category => {
      dispatch(actions.listCourseCategory(category));
    },
    fetchListExpert: data => {
      dispatch(expertActions.listExpert(data));
    },
    getDetail: id => {
      dispatch(actions.getDetail(id));
    },
    registerCourse: data => {
      dispatch(actions.registerCourse(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

TrainingService.propTypes = {
  registerCourse: PropTypes.func,
  clearNotify: PropTypes.func,
  fetchlistCourseTop: PropTypes.func,
  fetchlistCourseCategory: PropTypes.func,
  fetchListCourseHot: PropTypes.func,
  fetchListExpert: PropTypes.func,
  listCourseTop: PropTypes.array,
  listCourseHot: PropTypes.array,
  listCourseCategory: PropTypes.array,
  message: PropTypes.string
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainingService);
