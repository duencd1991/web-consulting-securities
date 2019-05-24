import React, { Component } from 'react';
import './header2.scss';
import '../../style/animation.scss';
import logo from '../../assets/img/vi_mbs_logo.png';
import icSearch from '../../assets/img/btnSearch.png';
import HeaderTop from './headerTop';

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false
    }
  }

  onClickSearchBar = (show) => {
    this.setState({
      showSearchBar: show
    })
  }

  render() {
    const {
      showSearchBar
    } = this.state;
    const urlPage = window.location.pathname.toLowerCase();

    return (
      <React.Fragment>
        <HeaderTop />
        {
          showSearchBar && <div className='body-click' onClick={ () => this.onClickSearchBar(false) }></div>
        }
        <nav className="navbar navbar-expand-lg navbar-dark bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="/">
                  <img src={logo} alt=""/>
                </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className={urlPage === '/' ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="/">TRANG CHỦ</a>
                </li>
                <li className={urlPage === '/register-account' || urlPage === '/trading-instruction'
                  || urlPage === '/training-service' || urlPage === '/consulting' ?
                    "nav-item dropdown active" : "nav-item dropdown"}>
                  <div className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    DỊCH VỤ
                  </div>
                  <div className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/register-account">Mở tài khoản</a>
                    
                    <a className="dropdown-item" href="/trading-instruction">Hướng dẫn giao dịch</a>
                    
                    <a className="dropdown-item" href="/training-service">Dịch vụ đào tạo</a>
                    
                    <a className="dropdown-item" href="/consulting">Dịch vụ tư vấn</a>
                  </div>
                </li>
                <li className={urlPage === '/consulting-securities' ? "nav-item dropdown active": "nav-item dropdown" }>
                  <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SẢN PHẨM
                  </div>
                  <div className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/consulting-securities">Tư vấn chứng khoán phái sinh</a>
                  </div>
                </li>
                <li className={urlPage === '/report' ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="/report">BÁO CÁO</a>
                </li>
                <li className={urlPage === '/news' ? "nav-item active" : "nav-item"}>
                  <a className="nav-link" href="/news">KIẾN THỨC</a>
                </li>
                <li className={urlPage === '/about-us' ? "nav-item dropdown active" : "nav-item dropdown"}>
                  <a className="nav-link" href="/about-us">VỀ CHÚNG TÔI</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 formSearch">
                <input autoFocus className={showSearchBar ? "form-control mr-sm-2 search-bar show" : "form-control mr-sm-2 search-bar"}
                  type="search" placeholder="Từ khóa tìm kiếm" aria-label="Search" />
                <img className='btn-search' alt='icon-search' onClick={()=>this.onClickSearchBar(!showSearchBar)} src={ icSearch } />
              </form>
              <form className="form-inline my-2 my-lg-0 formSearchR">
                <input autoFocus className="form-control mr-sm-2 search-input"
                  type="search" placeholder="Từ khóa tìm kiếm" aria-label="Search" />
                <img className='btn-search' alt='icon-search' src={ icSearch } />
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}