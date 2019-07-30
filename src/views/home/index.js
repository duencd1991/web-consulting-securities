import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import "./home.scss";
import Layout from "../layout/layout";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import noImg from "../../assets/img/imgThum.png";
import icFile from "../../assets/img/icPdf.png";
import actions from "../../store/home/actions";
import notifyActions from "../../store/notification/actions";
import { toast } from "react-toastify";

const listBanner = [
  {
    img: banner1,
    url: "/consulting-securities"
  },
  {
    img: banner2,
    url: "/training-service"
  },
  {
    img: banner3,
    url: "/consulting"
  }
];
const listMenu = [
  {
    link: "/guideline",
    name: "HƯỚNG DẪN TỰ GIAO DỊCH"
  },
  {
    link: "/report",
    name: "BÁO CÁO PHÂN TÍCH"
  },
  {
    link: "/training-service",
    name: "ĐÀO TẠO"
  },
  {
    link: "/consulting",
    name: "TƯ VẤN ĐẦU TƯ"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 0,
      index: 0,
      direction: null
    };
  }

  selectMenu = index => {
    this.setState({
      selectedMenu: index
    });
  };
  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  componentWillMount() {
    this.props.fetchNews();
    this.props.fetchGuideLines();
    this.props.fetchReports();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      this.props.clearNotify();
    }
  }

  render() {
    const { selectedMenu, index, direction } = this.state;
    return (
      <Layout title="">
        <div className="home-page">
          <div className="home-slider-menu">
            <div className="home-slider">
              <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                // interval={1000}
              >
                {listBanner.map((item, bannerIndex) => {
                  return (
                    <Carousel.Item key={bannerIndex}>
                      <a href={item.url}>
                        <img
                          className="d-block w-100"
                          src={item.img}
                          alt="banner"
                        />
                      </a>
                      {/* <Carousel.Caption> */}
                        {/* <div className="banner-title">{item.title}</div>
                        <ul>
                          <li>Buổi 1: Giới thiệu về CKPS ...</li>
                          <li>Buổi 2: Các chiến lược giao dịch ...</li>
                          <li>Buổi 3: Hướng dẫn thao tác ...</li>
                          <li>Buổi 4: Giao dịch thực tế cùng MBS ...</li>
                        </ul>
                        <button className="btn banner-detail">
                          XEM CHI TIẾT
                        </button> */}
                      {/* </Carousel.Caption> */}
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="home-menu">
              {listMenu.map((menu, menuIndex) => {
                return (
                  <div
                    key={menuIndex}
                    className={
                      selectedMenu === menuIndex
                        ? "home-menu-item active"
                        : "home-menu-item"
                    }
                    onClick={() => this.selectMenu(menuIndex)}
                  >
                    {menu.name}
                    {selectedMenu === menuIndex ? (
                      <i className="fas ic_Sub" />
                    ) : (
                      <i className="fas ic_Add" />
                    )}
                    <div
                      className={
                        selectedMenu === menuIndex
                          ? "sub-menu-show"
                          : "sub-menu-hiden"
                      }
                    >
                      <a href={menu.link} className="btn_readMore">
                        Xem thêm
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="box-news">
            <div className="box-width-limit">
              <div className="box-new-item" id="box-new">
                <div className="title">
                  <span className="header">KIẾN THỨC </span>
                  <span className="normal">ĐẦU TƯ</span>
                </div>
                <hr />
                <div className="box-new-contents">
                  {this.props.listNews.map((item, newsIndex) => {
                    return (
                      <div className="new-content" key={newsIndex}>
                        <img
                          className="new-content-img"
                          alt={`news-${item.id}`}
                          src={item.imgUrl ? item.imgUrl : noImg}
                        />
                        <a
                          href={`/news?id=${newsIndex}`}
                          className="new-content-text"
                        >
                          {item.title}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="box-new-item">
                <div className="title">
                  <span className="header">BÁO CÁO </span>
                  <span className="normal">PHÂN TÍCH</span>
                </div>
                <hr />
                <div className="box-files">
                  {this.props.listReports.map((item, reportIndex) => {
                    return (
                      <div className="file-contents" key={reportIndex}>
                        <img alt={`report-${reportIndex}`} src={icFile} />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="file-content-text"
                        >
                          {item.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="box-new-item">
                <div className="title">
                  <span className="header">HƯỚNG DẪN </span>
                  <span className="normal">GD ĐƯỢC XEM NHIỀU NHẤT</span>
                </div>
                <hr />
                <div className="box-files">
                  {this.props.listGuidelines.map((item, guideIndex) => {
                    return (
                      <div className="file-contents" key={guideIndex}>
                        <img alt={`file-${guideIndex}`} src={icFile} />
                        <a
                          href={`/guideline?id=${item.id}`}
                          className="file-content-text"
                        >
                          {item.name}
                        </a>
                      </div>
                    );
                  })}
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
    listGuidelines: state.Home.listGuidelines,
    success: state.Notifys.success,
    message: state.Notifys.message
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
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

Home.propTypes = {
  fetchNews: PropTypes.func,
  fetchGuideLines: PropTypes.func,
  fetchReports: PropTypes.func,
  listNews: PropTypes.array,
  listReports: PropTypes.array,
  listGuidelines: PropTypes.array
};
export default compose(
  withTranslation(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
