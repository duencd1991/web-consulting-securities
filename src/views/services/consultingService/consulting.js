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
            <div className="title">TRIẾT LÝ TƯ VẤN CKPS KẾT HỢP ROBO</div>
            <hr />
            <div className="slogan-detail">
              <p>
                <b>Đi theo nguyên tắc thị trường luôn luôn đúng</b>, phương pháp
                luận của chúng tôi mô tả vận động của dòng tiền thông minh bằng
                các công cụ công nghệ tài chính. Dựa trên đó chúng tôi phát
                triển dịch vụ tư vấn đầu tư giúp nhà đầu tư có được danh mục tối
                ưu tại bất kỳ thời điểm nào, vừa có khả năng sinh lời cao đi kèm
                với rủi ro được quản trị ngay từ khi bắt đầu tham gia đầu tư.
              </p>
              <p>
                Nhà đầu tư có thể lựa chọn các sản phẩm tư vấn phù hợp với nhu
                cầu để <b>tạo lập danh mục đầu tư cá nhân hiệu quả</b> theo
                phong cách riêng.
              </p>
              <p>
                Dịch vụ tư vấn đầu tư chứng khoán của MBS được vận hành và trải
                nghiệm bởi <b>đội ngũ chuyên gia phân tích hàng đầu</b> với
                nghiệp vụ và kinh nghiệm tư vấn dày dặn, chúng tôi phục vụ nhà
                đầu tư giải pháp chúng tôi tự tin sử dụng.
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
