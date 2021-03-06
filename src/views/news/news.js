import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "../layout/layout";
import "./news.scss";
import Pagination from "react-js-pagination";
import icNoImg from "../../assets/img/thumbnail-no-img.png";
import icNoImg2 from "../../assets/img/thumbnail-no-img2.png";
import icArrowPrev from "../../assets/img/icArrowPrev.png";
import icArrowNext from "../../assets/img/icArrowNext.png";
import icArrowStart from "../../assets/img/icArrowStart.png";
import icArrowEnd from "../../assets/img/icArrowEnd.png";
import actions from "../../store/news/actions";
import { TYPE_NEWS } from "../../utils/constant";

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 1,
      pageNum: 1,
      pageSize: 6,
      detail: false
    };
  }

  onSelectMenu = index => {
    if (this.state.detail) {
      this.props.history.push(`/news?menu=${index}`);
    }
    this.setState({
      selectedMenu: index
    });
  };

  onChangePageNum = pageNum => {
    this.setState({
      pageNum: pageNum
    });
  };
  fetchNews = () => {
    const state = this.state;
    const start = (state.pageNum - 1) * state.pageSize;
    const limit = state.pageSize + start;
    this.props.fetchListNews(start, limit, state.selectedMenu);
    // if($(".list-news")) {
    //   $('html,body').animate({
    //     scrollTop: $(".list-news").offset().top
    //   }, 'slow');
    // }
  };

  componentDidMount() {
    this.fetchNews();
    this.props.fetchListNewsHot();
    this.props.fetchlistNewsTop();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id) {
      this.setState({
        detail: true
      });
      this.props.getDetail({id: id});
    } else {
      this.setState({
        detail: false
      });
    }

    const menu = url.searchParams.get("menu");
    if (menu) {
      this.setState({
        selectedMenu: menu
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedMenu !== this.state.selectedMenu) {
      const state = this.state;
      const start = (state.pageNum - 1) * state.pageSize;
      const limit = state.pageSize + start;
      this.props.fetchListNews(start, limit, state.selectedMenu);
    }
    if (prevProps.location.search !== this.props.location.search) {
      const url = new URL(window.location);
      const id = url.searchParams.get("id");
      if (id) {
        this.setState({
          detail: true
        });
        this.props.getDetail({id: id});
      } else {
        this.setState({
          detail: false
        });
      }
    }
    if (
      prevState.pageNum !== this.state.pageNum ||
      prevState.pageSize !== this.state.pageSize
    ) {
      this.fetchNews();
    }
  }

  componentWillReceiveProps(nextProps) {
   
  }

  goToDetail = id => {
    this.props.updateViews({id: id});
    this.props.history.push(`/news?id=${id}`);
  };

  render() {
    var createDate = new Date(this.props.detail.createDate);
    const convertedDate = `${createDate.getDate()} - ${createDate.getMonth()+1} - ${createDate.getFullYear()}`
    const { selectedMenu, pageNum, pageSize, detail } = this.state;
    return (
      <Layout>
        <div className="news-page">
          <div className="news-banner">
            <h3>KIẾN THỨC</h3>
          </div>
          <div className="news-content">
            <div className="list-news">
              <div className="title">KIẾN THỨC</div>
              <hr />
              {detail ? (
                <div className="news-detail-page">
                  <span className="current-menu-news">
                    {TYPE_NEWS[selectedMenu - 1].name}
                  </span>
                  <img alt="img-news" className="img-news" src={this.props.detail.imgUrl}/>
                  <div className="news-detail-title">
                    {this.props.detail.title}
                  </div>
                  <div className="new-footer">
                    <span>
                      {this.props.detail.author
                        ? this.props.detail.author
                        : "Admin"}
                    </span>
                    <i className="far fa-calendar-alt"></i>
                    <span>{
                      convertedDate
                      }</span>
                    <i className="far fa-eye"></i>
                    <span>
                      {this.props.detail.views ? this.props.detail.views : 0}
                    </span>
                  </div>
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: this.props.detail.content
                    }}
                  ></div>
                </div>
              ) : (
                <React.Fragment>
                  <div className="list-new-box">
                    {this.props.listNews && this.props.listNews.length > 0 ? (
                      this.props.listNews.map((item, index) => {
                        return (
                          <div className="new-item" key={index}>
                            <img
                              alt={`img-${index}`}
                              src={item.imgUrl ? item.imgUrl : icNoImg}
                              onClick={() => this.goToDetail(item.id)}
                            />
                            <div className="title">{item.title}</div>
                            <div className="new-des">{item.des}</div>
                            <div className="new-footer">
                              <span>{item.author ? item.author : "Admin"}</span>
                              <i className="far fa-calendar-alt"></i>
                              <span>{item.date}</span>
                              <i className="far fa-eye"></i>
                              <span>{item.views ? item.views : 0}</span>
                            </div>
                            <div
                              className="btn-detail"
                              onClick={() => this.goToDetail(item.id)}
                            >
                              CHI TIẾT
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="error-no-data">Không có dữ liệu</div>
                    )}
                  </div>
                  {this.props.listNews && this.props.listNews.length > 0 && (
                    <Pagination
                      firstPageText={
                        <img
                          alt="btnStart"
                          className="btn-Pagination"
                          src={icArrowStart}
                        />
                      }
                      lastPageText={
                        <img
                          alt="btnEnd"
                          className="btn-Pagination"
                          src={icArrowEnd}
                        />
                      }
                      prevPageText={
                        <img
                          alt="btnBack"
                          className="btn-Pagination"
                          src={icArrowPrev}
                        />
                      }
                      nextPageText={
                        <img
                          alt="btnNext"
                          className="btn-Pagination"
                          src={icArrowNext}
                        />
                      }
                      activePage={pageNum}
                      itemsCountPerPage={pageSize}
                      totalItemsCount={this.props.total}
                      pageRangeDisplayed={5}
                      onChange={this.onChangePageNum}
                    />
                  )}
                </React.Fragment>
              )}
            </div>
            <div className="box-news">
              <div className="list-news-menu">
                {TYPE_NEWS.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => this.onSelectMenu(item.type)}
                      className={
                        selectedMenu === item.type
                          ? "news-menu-item selected"
                          : "news-menu-item"
                      }
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
              <div className="list-news-top">
                <div className="title">CÁC BÀI VIẾT NỔI BẬT</div>
                <hr />
                {this.props.listNewsTop.map((item, index) => {
                  return (
                    <div key={index} className="new-top-item">
                      <img
                        src={item.imgUrl ? item.imgUrl : icNoImg2}
                        alt={`new-img-${index}`}
                      />
                      <div className="new-info">
                        <a
                          className="new-hot-title"
                          onClick={() => this.goToDetail(item.id)}
                        >
                          {item.title}
                        </a>
                        <div className="new-info-footer">
                          <span>{item.author}</span>
                          <i className="far fa-calendar-alt"></i>
                          <span>{item.date}</span>
                          <i className="far fa-eye"></i>
                          <span>{item.views}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="list-news-top">
                <div className="title">CÁC BÀI VIẾT MỚI NHẤT</div>
                <hr />
                {this.props.listNewsHot.map((item, index) => {
                  return (
                    <div key={index} className="new-top-item">
                      <img
                        src={item.imgUrl ? item.imgUrl : icNoImg2}
                        alt={`new-img-${index}`}
                      />
                      <div className="new-info">
                        <a
                          className="new-hot-title"
                          onClick={() => this.goToDetail(item.id)}
                        >
                          {item.title}
                        </a>
                        <div className="new-info-footer">
                          <span>{item.author}</span>
                          <i className="far fa-calendar-alt"></i>
                          <span>{item.date}</span>
                          <i className="far fa-eye"></i>
                          <span>{item.views}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
    listNews: state.News.listNews,
    total: state.News.total,
    listNewsHot: state.News.listNewsHot,
    listNewsTop: state.News.listNewsTop,
    detail: state.News.detail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListNews: (start, limit, category) => {
      dispatch(actions.listNews(start, limit, category));
    },
    fetchListNewsHot: () => {
      dispatch(actions.listNewsHot());
    },
    fetchlistNewsTop: () => {
      dispatch(actions.listNewsTop());
    },
    updateViews: data => {
      dispatch(actions.updateViews(data));
    },
    getDetail: data => {
      dispatch(actions.getDetail(data));
    }
  };
};

News.propTypes = {
  fetchListNews: PropTypes.func,
  fetchListNewsHot: PropTypes.func,
  fetchlistNewsTop: PropTypes.func,
  updateViews: PropTypes.func,
  getDetail: PropTypes.func,
  location: PropTypes.object,
  total: PropTypes.number,
  detail: PropTypes.object,
  listNews: PropTypes.array,
  listNewsTop: PropTypes.array,
  listNewsHot: PropTypes.array,
  history: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
