import React, { Component } from "react";
import Layout from "../layout/layout";
import { connect } from "react-redux";
import "./aboutUs.scss";
import icNoImg from "../../assets/img/ic_no_img2.png";
import Slider from "react-slick";
import ContactBox from "../../components/contactBox/contactBox";
import expertActions from "../../store/expert/actions";
import ExpertBox from "../../components/expertBox/expertBox";

const listTeachers = [
  {
    img: "",
    name: "NGUYỄN THỊ MINH THƯ",
    title: "CEO & FOUNDER",
    detail: "Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu"
  },
  {
    img: "",
    name: "NGUYỄN THỊ MINH THƯ",
    title: "CEO & FOUNDER",
    detail: "Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu"
  },
  {
    img: "",
    name: "NGUYỄN THỊ MINH THƯ",
    title: "CEO & FOUNDER",
    detail: "Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu"
  },
  {
    img: "",
    name: "NGUYỄN THỊ MINH THƯ",
    title: "CEO & FOUNDER",
    detail: "Hơn 5 năm kinh nghiệm phân tích kinh tế vĩ mô và trái phiếu"
  }
];

class AboutUs extends Component {
  componentDidMount() {
    const data = {
      start: 0,
      limit: 10
    };
    this.props.fetchListExpert(data);
  }

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      centerMode: true
    };
    return (
      <Layout>
        <div className="about-us-page">
          <div className="about-us-banner"></div>
          <ExpertBox listExpert={this.props.listExpert} style="white" />
          <div className="layout-contact">
            <div className="title">LIÊN HỆ</div>
            <hr />
            <div className="contact-des">
              Hãy liên hệ với chúng tôi để biết thêm chi tiết !
            </div>
            <div className="contact-content">
              <ContactBox />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    listExpert: state.Expert.listExpert
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchListExpert: data => {
      dispatch(expertActions.listExpert(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs);
