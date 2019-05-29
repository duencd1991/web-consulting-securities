import React, { Component } from "react";
import Layout from '../layout/layout';
import { connect } from 'react-redux';
import './consultingSecurities.scss';
import icArrow from '../../assets/img/icArrowNext.png';
import icSkype from '../../assets/img/icSkype16x16.png';
import icTele from '../../assets/img/icTele16x16.png';

const listMenu = [
  'HỆ THỐNG MBS',
  'HỆ THỐNG BÊN THỨ BA PHÁT TRIỂN',
  'TOP 10 HỆ THỐNG',
  'KHÁM PHÁ HỆ THỐNG'
]
const listRobot = [
  {
    heThong: 'Breakout',
    loaiTaiSan: 'VN30F1M',
    nhaPhatTrien: 'PTSP',
    batDau: '3/1/2019',
    tongLoLai: null,
    tyLeThang: null,
    profitFactor: null,
    laiLoRealTime: null,
    loiNhuan: null,
    urlRegister: 'abc.com.vn'
  },
  {
    heThong: 'EMA',
    loaiTaiSan: 'VN30F1M',
    nhaPhatTrien: 'PTSP',
    batDau: '3/1/2019',
    tongLoLai: null,
    tyLeThang: null,
    profitFactor: null,
    laiLoRealTime: null,
    loiNhuan: null,
    urlRegister: 'abc.com.vn'
  },
  {
    heThong: 'Fadeout',
    loaiTaiSan: 'VN30F1M',
    nhaPhatTrien: 'PTSP',
    batDau: '3/1/2019',
    tongLoLai: null,
    tyLeThang: null,
    profitFactor: null,
    laiLoRealTime: null,
    loiNhuan: null,
    urlRegister: 'abc.com.vn'
  }
]

class ConsultingSecurities extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMenu: 0
    }
  }

  onChangeMenu = (index) => {
    this.setState({
      selectedMenu: index
    })
  }

  render() {
    const {
      selectedMenu
    } = this.state;
    return(
      <Layout>
        <div className='consulting-page'>
          <div className='consulting-banner'>
            <h3>TƯ VẤN CHỨNG KHOÁN PHÁI SINH</h3>
          </div>
          <div className='page-content'>
            <div className='consulting-menu'>
              {
                listMenu.map((item, index) => {
                  return <div key={index} onClick={() => this.onChangeMenu(index)}
                    className={selectedMenu === index ? 'menu-item active' : 'menu-item'}>{item}</div>
                })
              }
            </div>
            <div className='layout-robot-consulting'>
              <div className='title'>HỆ THỐNG <span>ROBOT</span> KHUYẾN NGHỊ</div>
              <hr />
              <div class="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">HỆ THỐNG</th>
                    <th scope="col">LOẠI TÀI SẢN</th>
                    <th scope="col">NHÀ PHÁT TRIỂN</th>
                    <th scope="col">BẮT ĐẦU</th>
                    <th scope="col">TỔNG LÃI LỖ</th>
                    <th scope="col">TỶ LỆ THẮNG</th>
                    <th scope="col">PROFIT FACTOR</th>
                    <th scope="col" className='table-center-element'>LÃI LỖ<br />REALTIME</th>
                    <th scope="col" className='table-center-element'>LỢI NHUẬN<br/>(%) NĂM</th>
                    <th scope="col" className='table-center-element'>CLICK<br/>ĐỂ ĐĂNG KÝ</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listRobot.map((item, index) => {
                      return <tr key={index}>
                        <td>{item.heThong ? item.heThong : '...'}</td>
                        <td>{item.loaiTaiSan ? item.loaiTaiSan : '...'}</td>
                        <td>{item.nhaPhatTrien ? item.nhaPhatTrien : '...'}</td>
                        <td>{item.batDau ? item.batDau : '...'}</td>
                        <td>{item.tongLoLai ? item.tongLoLai : '...'}</td>
                        <td>{item.tyLeThang ? item.tyLeThang : '...'}</td>
                        <td>{item.profitFactor ? item.profitFactor : '...'}</td>
                        <td>{item.laiLoRealTime ? item.laiLoRealTime : '...'}</td>
                        <td>{item.loiNhuan ? item.loiNhuan : '...'}</td>
                        <td className='table-center-element'><button className='btn-register' href={item.urlRegister}>CLICK</button></td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
              </div>
              <div className='title'>LIVE TRADING</div>
              <hr />
              <div className='title'>CÔNG CỤ GIAO DỊCH</div>
              <hr />
              <div className='layout-tool'>
                <div className='tool-trader-layout'>
                  <div className='tool-trader-item'>
                    <img src={icArrow} alt='ic-arow'/>
                    Robot cảnh báo (trade alerts miễn phí)</div>
                  <div className='tool-trader-item'>
                    <img src={icArrow} alt='ic-arow'/>
                    D24 datafeed hỗ trợ
                  </div>
                </div>
                <div className='room-trader-layout'>
                  <div className='room-trader-item'>
                    <img src={icTele} alt='ic-tele'/>
                    Telegram
                  </div>
                  <div className='room-trader-item'>
                    <img src={icSkype} alt='ic-skype'/>
                    Room 1
                  </div>
                  <div className='room-trader-item'>
                    <img src={icSkype} alt='ic-skype'/>
                    Room 2
                  </div>
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps,mapDispatchToProps)(ConsultingSecurities);