import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import './consulting.scss'
import Carousel from 'nuka-carousel';
import Investor from '../../../components/common/investor/investor';
import ReviewBox from '../../../components/common/reviewBox/reviewBox';
import ExpertBox from '../../../components/common/expertBox/expertBox';

import icGroup1 from '../../../assets/img/ic_investor1.png';
import icGroup2 from '../../../assets/img/ic_investor2.png';
import icGroup3 from '../../../assets/img/ic_investor3.png';
import icGroup4 from '../../../assets/img/ic_investor4.png';
import icGroup5 from '../../../assets/img/ic_investor5.png';

const listInvestor = [
  {
    img: icGroup1,
    title: 'THAM GIA GROUP TƯ VẤN PHÁI SINH REAL TIME',
    detail: 'Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả.'
  },
  {
    img: icGroup2,
    title: 'THAM GIA ROOM ROBO TƯ VẤN VỚI HIỆU QUẢ LÊN TỚI 100%/THÁNG',
    detail: 'Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả.'
  },
  {
    img: icGroup3,
    title: 'THAM GIA GROUP TƯ VẤN KÍN TRÊN FACEBOOK',
    detail: 'Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả.'
  },
  {
    img: icGroup4,
    title: 'NHÂN BÁO CÁO VIP VỀ XU THẾ THỊ TRƯỜNG VÀ CƠ HỘI ĐẦU TƯ',
    detail: 'Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả.'
  },
  {
    img: icGroup5,
    title: 'THAM GIA CÁC LỚP ĐÀO TẠO VỀ KỸ THUẬT, TÂM LÝ GIAO DỊCH VÀ SẢN PHẨM',
    detail: 'Tùy theo như cầu, NĐT được lựa chọn tham gia vào group tư vấn đầu tư Cổ phiếu/ HĐTL/ ETF/ Chứng quyền có đảm bảo hoặc tất cả.'
  }
]
const listReview = [
  {
    name: 'NGUYỄN VĂN DƯƠNG',
    title: 'CEO STOCKPLUS',
    img: '',
    review: 'Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân.'
  },
  {
    name: 'NGUYỄN VĂN DƯƠNG',     title: 'CEO STOCKPLUS',
    img: '',
    review: 'Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân.'
  },
  {
    name: 'NGUYỄN VĂN DƯƠNG',
    title: 'CEO STOCKPLUS',
    img: '',
    review: 'Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân.'
  },
  {
    name: 'NGUYỄN VĂN DƯƠNG',
    title: 'CEO STOCKPLUS',
    img: '',
    review: 'Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân.'
  },
  {
    name: 'NGUYỄN VĂN DƯƠNG',
    title: 'CEO STOCKPLUS',
    img: '',
    review: 'Một phương pháp tiếp cận mới, đột phá, hiệu quả, an toàn. Chiến lược đầu tư SmartMoney rất phù hợp cho nhà đầu tư cá nhân.'
  }
]
const listExperts = [
  {
    specialized: "BỘ PHẬN PHÂN TÍCH",
    list: [
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
  },
  {
    specialized: "BỘ PHẬN CHIẾN LƯỢC THỊ TRƯỜNG",
    list: [
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
  },
  {
    specialized: "BỘ PHẬN LẬP TRÌNH VIÊN",
    list: [
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
  }
]

class Consulting extends Component {
  render() {
    return(
      <Layout title="">
        <div className='consulting-page'>
          <div className='banner-layout'>
            <div className='title'>DỊCH VỤ TƯ VẤN</div>
            <div className='sub-title'>Sau khi nhà đầu tư đăng ký thành công, chúng tôi sẽ xét duyệt và kích hoạt dịch vụ trong vòng 48h làm việc. Thông báo kích hoạt dịch vụ được gửi qua email.</div>
            <div className='price-consulting'>Chỉ với 2 Triệu/tháng</div>
            <button className='btn btn-register'>ĐĂNG KÝ</button>
            <a className='btn-arrow-down' href='#slogan-layout'></a>
          </div>
          <div className='slogan-layout' id='slogan-layout'>
            <div className='title'>TRIẾT LÝ TƯ VẤN CKPS KẾT HỢP ROBO</div>
            <hr />
            <div className='slogan-detail'>
            <p><b>Đi theo nguyen tắc thị trường luôn luôn đúng</b>, phương pháp luận của chúng tôi mô tả vận động của dòng tiền thông minh bằng các công cụ công nghệ tài chính.
            Dựa trên đó chúng tôi phát triển dịch vụ tư vấn đầu tư giúp nhà đầu tư có được danh mục tối ưu tại bất kỳ thời điểm nào, vừa có khả năng sinh lời cao đi kèm với rủi ro được quản trị ngay từ khi bắt đầu tham gia đầu tư.</p>
            <p>Nhà đầu tư có thể lựa chọn các sản phẩm tư vấn phù hợp với nhu cầu để <b>tạo lập danh mục đàu tư cá nhân hiệu quả</b> theo phòng cách riêng.</p>
            <p>Dịch vụ tư vấn đầu tư chứng khoán của HSC được vận hành và trải nghiệm bởi <b>đội ngũ chuyên gia phân tích hàng đầu</b> với nghiệp vụ và kinh nghiệm tư vấn dày dặn,
            chúng tôi phục vụ nhà đầu tư giải pháp chúng tôi tự tin sử dụng.
            </p>
            </div>
          </div>
          <div className='investor-layout'>
            <div className='investor-title'>QUYỀN LỢI NHÀ ĐẦU TƯ</div>
            <hr />
            <div className='list-investor'>
            {
              listInvestor.map((item, index) => {
                return <Investor key={index} img={item.img} title={item.title} detail={item.detail} />
              })
            }
            </div>
          </div>
          <div className='review-layout'>
            <div className='review-title'>ĐÁNH GIÁ DỊCH VỤ TƯ VẤN</div>
            <hr />
            <Carousel 
              renderCenterLeftControls={({ previousSlide }) => (
                <i></i>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <i></i>
              )}
            >
              {
                listReview.map((item, index) => {
                  return <ReviewBox key={index} name={ item.name } title={ item.title } img={item.img} review={item.review} />
                })
              }
            </Carousel>
          </div>
          <div className='experts-layout'>
            <div className='expert-title'>ĐỘI NGŨ CHUYÊN GIA</div>
            <hr />
            <Carousel 
              renderCenterLeftControls={({ previousSlide }) => (
                <i></i>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <i></i>
              )}
            >
              {
                listExperts.map((item, index) => {
                  return <ExpertBox key={index} specialized={item.specialized} list={item.list} />
                })
              }
            </Carousel>
            
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps,mapDispatchToProps)(Consulting);