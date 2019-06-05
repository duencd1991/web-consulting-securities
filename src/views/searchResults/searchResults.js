import React, { Component } from 'react';
import Layout from '../layout/layout';
import './searchResults.scss';
import icThumbnail from '../../assets/img/thumbnail-no-img2.png';
import icThumbnail1 from '../../assets/img/resultSearch01.jpg';

const listResultSearch = [
  {
    title: "Chứng khoán phái sinh: Lợi ích và điểm khác biệt",
    image: icThumbnail1,
    des: "Việc giao dịch chứng khoán phái sinh sẽ giúp nhà đầu tư phòng hộ rủi ro (Hedging) khi có nhu cầu giao dịch thực sự tài sản cơ sở và phòng hộ rủi ro liên quan đến biến động giá của tài sản.",
  },
  {
    title: "Mở tài khoản chứng khoán phái sinh cần bao nhiêu tiền? ",
    image: icThumbnail,
    des: "Nhà đầu tư cần chuẩn bị bao nhiêu tiền để mở tài khoản chứng khoán phái sinh và nộp tiền ký quỹ ban đầu trước khi tham gia mua bán hợp đồng tương lai.",
  },
  {
    title: "Cách thức mở tài khoản chứng khoán phái sinh",
    image: icThumbnail,
    des: " Để tham gia vào các hoạt động giao dịch trên thị trường CKPS thì việc đầu tiên NĐT cần thực hiện là mở tài khoản phái sinh. Bài viết sau đây sẽ giới thiệu chi tiết các cách mở tài khoản CKPS dành cho NĐT cá nhân trong nước.",
  },
  {
    title: " Hướng dẫn cách chơi chứng khoán phái sinh ",
    image: icThumbnail,
    des: " Để tham gia vào các hoạt động giao dịch trên thị trường CKPS thì việc đầu tiên NĐT cần thực hiện là mở tài khoản phái sinh. Bài viết sau đây sẽ giới thiệu chi tiết các cách mở tài khoản CKPS dành cho NĐT cá nhân trong nước.",
  },
  {
    title: "Ba chiến lược đầu tư trong chứng khoán phái sinh",
    image: icThumbnail,
    des: " Để tham gia vào các hoạt động giao dịch trên thị trường CKPS thì việc đầu tiên NĐT cần thực hiện là mở tài khoản phái sinh. Bài viết sau đây sẽ giới thiệu chi tiết các cách mở tài khoản CKPS dành cho NĐT cá nhân trong nước.",
  }
]

export default class searchResults extends Component {
  render() {
    return (
      <Layout>
        <div className='search_Results_page'>
          <div className='searchResults_Banner'>
            <h3>Tìm kiếm</h3>
          </div>
          <div className='mainContent'>
            <div className='header_title'>
              <div className='searchresult_title'>Kết quả tìm kiếm</div>
              <hr />
            </div>
            <div className='listSearchResults'>
              <ul>
                {
                  listResultSearch.map((item, index) => {
                    return <li key={index}>
                      <div className='thumb'>
                        <a href=""><img alt="" src={item.image ? item.image : icThumbnail} /></a>
                      </div>
                      <div className='des'>
                        <a href="">
                          <b>{item.title}</b>
                        </a>
                        {
                          item.des
                        }
                      </div>
                    </li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
