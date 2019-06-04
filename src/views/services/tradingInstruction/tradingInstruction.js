import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import './tradingInstruction.scss';
import bgHDGD from '../../../assets/img/bg_huong_dan_giao_dich.jpg';
import ContactBox from '../../../components/contactBox/contactBox';
import actions from '../../../store/tradingInstruction/actions';

const typeGuide = [
  {
    type: 1,
    title: 'Hướng dẫn giao dịch CKPS'
  },
  {
    type: 2,
    title: 'Quy chuẩn hợp đồng tương lai'
  },
  {
    type: 3,
    title: 'Biểu phí giao dịch'
  }
]

class TradingInstrucion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: 1
    }
  }

  selectMenu = (index) => {
    let select = -1;
    if (this.state.selectedMenu !== index) {
      select = index;  
    }
    this.setState({
      selectedMenu: select
    })
  }

  componentDidMount() {
    this.props.fetchListType(0, 4);
    this.props.fetchGuideLineList(0, 10);
  }

  render() {
    const {
      selectedMenu
    } = this.state;
    return(
      <Layout title="">
        <div className='trading-instruction-page'>
          <div className='banner'>
            <img alt='img' src={ bgHDGD } />
            <div className='title'>HƯỚNG DẪN GIAO DỊCH</div>
            <div className='sub-title'>CHỨNG KHOÁN PHÁI SINH</div>
          </div>
          <div className='content-box'>
            <div className='guide-menu'>
              <div className='title'>HƯỚNG DẪN GIAO DỊCH</div>
              <hr />
              <div className='list-menu-box'>
                {
                  typeGuide.map((typeItem, index) => {
                    return <ul key={index} className={selectedMenu === typeItem.type ? 'menu-item-box active' : 'menu-item-box'}>
                      {
                        selectedMenu === typeItem.type ? <i className="fas fa-angle-up arrow" />
                          : <i className="fas fa-angle-down arrow" />
                      }
                      <li className={selectedMenu === typeItem.type ? 'menu-catalog active' : 'menu-catalog' }
                        onClick={()=>this.selectMenu(typeItem.type)}>{ typeItem.title}</li>
                      {
                        typeItem.type === 1 && this.props.listType1 && this.props.listType1.map((item, index) => {
                          return <li key={index}>
                            <i className="fas fa-angle-double-right"></i>
                            {item.name}
                          </li>
                        })
                      }
                      {
                        typeItem.type === 2 && this.props.listType2 && this.props.listType2.map((item, index) => {
                          return <li key={index}>
                            <i className="fas fa-angle-double-right"></i>
                            {item.name}
                          </li>
                        })
                      }
                      {
                        typeItem.type === 3 && this.props.listType3 && this.props.listType3.map((item, index) => {
                          return <li key={index}>
                            <i className="fas fa-angle-double-right"></i>
                            {item.name}
                          </li>
                        })
                      }
                    </ul>
                  })
                }
              </div>
              <div className='contact-box-layout'>
                <div className='title'>LIÊN HỆ NHÂN VIÊN HỖ TRỢ</div>
                <hr />
                <ContactBox />
              </div>
            </div>
            <div className='top-guide'>
              <div className='title'>HƯỚNG DẪN ĐƯỢC XEM NHIỀU NHẤT</div>
              <ul className='box-top-guide'>
                {
                  this.props.listTop.map((item, index) => {
                    return <li key={index}>
                      <i className="fas fa-angle-double-right"></i>
                      {
                        item.name
                      }
                    </li>
                  })
                }
              </ul>
              <div className='register-box'>
                <p className='register-text'>Bạn có <span>TÀI KHOẢN</span></p>
                <p className='register-text'>giao dịch <span>CHỨNG KHOÁN</span> chưa?</p>
                <button className='btn btn-register'>
                  <i className="far fa-user"></i>
                  MỞ TÀI KHOẢN
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    listType1: state.GuideLines.listType1,
    listType2: state.GuideLines.listType2,
    listType3: state.GuideLines.listType3,
    listTop: state.GuideLines.listTop
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGuideLineList: (start, limit) => {
      dispatch(actions.listTop(start, limit));
    },
    fetchListType: (start, limit) => {
      dispatch(actions.listType(start, limit));
    },
    updateViews: (id) => {
      dispatch(actions.updateViews(id));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(TradingInstrucion);