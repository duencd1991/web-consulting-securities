import React from "react";
import Slider from "react-slick";
import icNoImg from "../../assets/img/ic_no_img2.png";
import "./expertBox.scss";

function detectmob() {
   if(window.innerWidth <= 800) {
     return true;
   } else {
     return false;
   }
}
const expertBox = props => {
  let numberSlides = props.listExpert.length - 1;
  if (detectmob()) {
    numberSlides = 1;
  }
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: numberSlides
  };

  return (
    <div className="teachers-layout">
      <div className="teachers-title">ĐỘI NGŨ GIẢNG VIÊN</div>
      <hr />
      <div className="teacher-des">
        Đội ngũ giảng viên của MBS tập hợp những chuyên gia hàng đầu trên thị
        trường chứng khoán với kho kiến thức sâu rộng cùng kinh nghiệm giao dịch
        lâu năm
      </div>
      <div className="teacher-special">CHUYÊN GIA TƯ VẤN</div>
      <Slider {...settings}>
        {props.listExpert.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.url ? item.url : icNoImg} alt={`img-${index}`} />
              <div className="teacher-name">{item.name}</div>
              <div className="teacher-title">{item.position}</div>
              <div className="teacher-detail">{item.description}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default expertBox;
