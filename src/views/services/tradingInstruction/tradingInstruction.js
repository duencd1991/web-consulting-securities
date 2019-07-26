import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "../../layout/layout";
import "./tradingInstruction.scss";
import bgHDGD from "../../../assets/img/bg_huong_dan_giao_dich.jpg";
import ContactBox from "../../../components/contactBox/contactBox";
import actions from "../../../store/tradingInstruction/actions";
import { TYPE_GUIDELINE } from "../../../utils/constant";

class TradingInstrucion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 1,
      detail: false
    };
  }

  selectMenu = index => {
    let select = -1;
    if (this.state.selectedMenu !== index) {
      select = index;
    }
    this.setState({
      selectedMenu: select
    });
  };

  componentDidMount() {
    const dataTop4 = {
      start: 0,
      limit: 4
    }
    const dataTop10 = {
      start: 0,
      limit: 10
    }
    this.props.fetchListType(dataTop4);
    this.props.fetchGuideLineList(dataTop10);

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
  componentDidUpdate(prevProps, prevState) {
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
  }
  goToDetail = id => {
    this.props.updateViews({id: id});
    this.props.history.push(`/guideline?id=${id}`);
  };

  render() {
    var createDate = new Date(this.props.detail.createDate);
    const convertedDate = `${createDate.getDate()} - ${createDate.getMonth()+1} - ${createDate.getFullYear()}`
    const { selectedMenu, detail } = this.state;
    return (
      <Layout title="">
        <div className="trading-instruction-page">
          <div className="banner">
            <img alt="img" src={bgHDGD} />
            <div className="title">HƯỚNG DẪN GIAO DỊCH</div>
            <div className="sub-title">CHỨNG KHOÁN PHÁI SINH</div>
          </div>
          <div className="content-box">
            <div className="guide-menu">
              <div className="title">HƯỚNG DẪN GIAO DỊCH</div>
              <hr />
              {
                detail ?
                  <div className="guideline-detail-page">
                    <span className="current-menu-guideline">
                      {
                        TYPE_GUIDELINE.map(item => {
                          if (item.type === selectedMenu) {
                            return item.title;
                          } else {
                            return null;
                          }
                        })
                      }
                    </span>
                    <div className="guideline-detail-title">
                      {this.props.detail.name}
                    </div>
                    <div className="guideline-footer">
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
                    <div className="guideline-file">
                      <a
                        href={this.props.detail.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        Tài liệu tham khảo đính kèm
                      </a>
                    </div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: this.props.detail.content
                      }}
                    ></div>
                  </div> : <React.Fragment>
                  <div className="list-menu-box">
                    {TYPE_GUIDELINE.map((typeItem, index) => {
                      return (
                        <ul
                          key={index}
                          className={
                            selectedMenu === typeItem.type
                              ? "menu-item-box active"
                              : "menu-item-box"
                          }
                        >
                          {selectedMenu === typeItem.type ? (
                            <i className="fas fa-angle-up arrow" />
                          ) : (
                            <i className="fas fa-angle-down arrow" />
                          )}
                          <li
                            className={
                              selectedMenu === typeItem.type
                                ? "menu-catalog active"
                                : "menu-catalog"
                            }
                            onClick={() => this.selectMenu(typeItem.type)}
                          >
                            {typeItem.title}
                          </li>
                          {typeItem.type === 1 &&
                            this.props.listType1 &&
                            this.props.listType1.map((item, type1Index) => {
                              return (
                                <li key={type1Index} onClick={() => this.goToDetail(item.id)}>
                                  <i className="fas fa-angle-double-right"></i>
                                  {item.name}
                                </li>
                              );
                            })}
                          {typeItem.type === 2 &&
                            this.props.listType2 &&
                            this.props.listType2.map((item, type2Index) => {
                              return (
                                <li key={type2Index} onClick={() => this.goToDetail(item.id)}>
                                  <i className="fas fa-angle-double-right"></i>
                                  {item.name}
                                </li>
                              );
                            })}
                          {typeItem.type === 3 &&
                            this.props.listType3 &&
                            this.props.listType3.map((item, type3Index) => {
                              return (
                                <li key={type3Index} onClick={() => this.goToDetail(item.id)}>
                                  <i className="fas fa-angle-double-right"></i>
                                  {item.name}
                                </li>
                              );
                            })}
                        </ul>
                      );
                    })}
                  </div>
                  <div className="contact-box-layout">
                    <div className="title">LIÊN HỆ NHÂN VIÊN HỖ TRỢ</div>
                    <hr />
                    <ContactBox />
                  </div>
                </React.Fragment>
              }
              
            </div>
            <div className="top-guide">
              <div className="title">HƯỚNG DẪN ĐƯỢC XEM NHIỀU NHẤT</div>
              <ul className="box-top-guide">
                {this.props.listTop.map((item, index) => {
                  return (
                    <li key={index}>
                      <span href=""
                        onClick={() => this.goToDetail(item.id)}>
                        <i className="fas fa-angle-double-right"></i>
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <div className="register-box">
                <p className="register-text">
                  Bạn có <span>TÀI KHOẢN</span>
                </p>
                <p className="register-text">
                  giao dịch <span>CHỨNG KHOÁN</span> chưa?
                </p>
                <a className="btn btn-register" href="/create-trading-account">
                  <i className="far fa-user"></i>
                  MỞ TÀI KHOẢN
                </a>
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
    listType1: state.GuideLines.listType1,
    listType2: state.GuideLines.listType2,
    listType3: state.GuideLines.listType3,
    listTop: state.GuideLines.listTop,
    detail: state.GuideLines.detail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGuideLineList: data => {
      dispatch(actions.listTop(data));
    },
    fetchListType: data => {
      dispatch(actions.listType(data));
    },
    updateViews: data => {
      dispatch(actions.updateViews(data));
    },
    getDetail: data => {
      dispatch(actions.getDetail(data));
    }
  };
};

TradingInstrucion.propTypes = {
  fetchListType: PropTypes.func,
  fetchGuideLineList: PropTypes.func,
  listType1: PropTypes.array,
  listType2: PropTypes.array,
  listType3: PropTypes.array,
  listTop: PropTypes.array,
  detail: PropTypes.object,
  history: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradingInstrucion);
