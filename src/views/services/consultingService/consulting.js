import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import "./consulting.scss";
import Carousel from "nuka-carousel";
import Investor from "../../../components/common/investor/investor";
import ReviewBox from "../../../components/common/reviewBox/reviewBox";
import expertActions from "../../../store/expert/actions";
import { listReview, listInvestor } from "../../../utils/constant";
import ExpertBox from "../../../components/expertBox/expertBox";

class Consulting extends Component {
  componentDidMount() {
    const data = {
      start: 0,
      limit: 10
    };
    this.props.fetchListExpert(data);
  }

  render() {
    return (
      <Layout title="">
        <div className="consulting-page">
          <div className="banner-layout">
            <div className="title">DỊCH VỤ TƯ VẤN</div>
            <div className="sub-title">
              Sau khi nhà đầu tư đăng ký thành công, chúng tôi sẽ xét duyệt và
              kích hoạt dịch vụ trong vòng 48h làm việc. Thông báo kích hoạt
              dịch vụ được gửi qua email.
            </div>
            <div className="price-consulting">Chỉ với 2 Triệu/tháng</div>
            <button className="btn btn-register">ĐĂNG KÝ</button>
            <a className="btn-arrow-down" href="#slogan-layout">
              {" "}
            </a>
          </div>
          <div className="slogan-layout" id="slogan-layout">
            <div className="title">TRIẾT LÝ TƯ VẤN CHỨNG KHOÁN PHÁI SINH</div>
            <hr />
            <div className="slogan-detail">
              <p>
                Phương pháp tư vấn kết hợp giữa chuyên gia tư vấn trong phiên và robo advisor: Chúng tôi kết hợp giữa nền tảng kinh nghiệm giao dịch thực tế của đội ngũ chuyên gia và sự khách quan & khả năng bám sát diễn biến thị trường của robo advisor.
              </p>
              <p>
                Đội ngũ tư vấn là những chuyên gia nhiều kinh nghiệm giao dịch trên thị trường cơ sở và phái sinh với nền tảng kiến thức và hiểu biết sâu sắc về sản phẩm, phân tích cơ bản và phân tích kỹ thuật. Hình thức tư vấn chuyên gia sẽ giúp nhà đầu tư nhận biết sớm các điểm đảo chiều và xu thế chính của thị trường.
              </p>
              <p>
                Robo advisor: Robo đưa ra các khuyến nghị khách quan và cụ thể về các điểm mua & điểm bán đối với chỉ số và mã cổ phiếu theo dõi.
                Các chiến lược của robo advisor:
                <li>Được đội ngũ chuyên gia lựa chọn cẩn trọng từ các chiến lược thành công đang được nhà đầu tư quốc tế sử dụng.</li>
                <li>Được kiểm nghiệm (backtest) trên dữ liệu thực tế thị trường Việt Nam. Robo advisor giúp nhà đầu tư đưa ra các quyết định khách quan về điểm mua & điểm bán dựa trên ưu thế về thống kê xác suất và giúp nhà đầu tư rèn luyện kỷ luật giao dịch, một nhân tố quan trọng để thành công trong giao dịch chứng khoán.</li>
              </p>
            </div>
          </div>
          <div className="investor-layout">
            <div className="investor-title">QUYỀN LỢI NHÀ ĐẦU TƯ</div>
            <hr />
            <div className="list-investor justify-content-md-center">
              {listInvestor.map((item, index) => {
                return (
                  <Investor
                    key={index}
                    img={item.img}
                    title={item.title}
                    detail={item.detail}
                  />
                );
              })}
            </div>
          </div>
          <div className="review-layout">
            <div className="review-title">ĐÁNH GIÁ DỊCH VỤ TƯ VẤN</div>
            <hr />
            <Carousel
              renderCenterLeftControls={({ previousSlide }) => <i></i>}
              renderCenterRightControls={({ nextSlide }) => <i></i>}
            >
              {listReview.map((item, index) => {
                return (
                  <ReviewBox
                    key={index}
                    name={item.name}
                    title={item.title}
                    img={item.img}
                    review={item.review}
                  />
                );
              })}
            </Carousel>
          </div>
          <ExpertBox listExpert={this.props.listExpert} />
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
)(Consulting);
