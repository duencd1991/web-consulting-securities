import React, { Component } from "react";
import Layout from "../layout/layout";
import { connect } from "react-redux";
import "./aboutUs.scss";
import icNoImg from "../../assets/img/ic_no_img2.png";
import Slider from "react-slick";
import ContactBox from "../../components/contactBox/contactBox";

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
          <div className="team-layout">
            <div className="team-title">ĐỘI NGŨ</div>
            <hr />
            <div className="team-des">
              Đội ngũ giảng viên của MBS tập hợp những chuyên gia hàng đầu trên
              thị trường chứng khoán với kho kiến thức sâu rộng cùng kinh nghiệm
              giao dịch lâu năm
            </div>
            <div className="team-special">CHUYÊN GIA TƯ VẤN</div>
            <Slider {...settings}>
              {listTeachers.map((item, index) => {
                return (
                  <div key={index} className="mem-item">
                    <img
                      alt={`ic-${index}`}
                      src={item.img ? item.img : icNoImg}
                    />
                    <div className="mem-name">{item.name}</div>
                    <div className="mem-title">{item.title}</div>
                    <div className="mem-detail">{item.detail}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutUs);
