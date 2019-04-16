import React, { Component } from 'react';
import './header2.scss';
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
    return (
      <React.Fragment>
        <HeaderTop />
        {
          showSearchBar && <div className='body-click' onClick={ () => this.onClickSearchBar(false) }></div>
        }
        <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#">
                  <img src={logo} alt=""/>
                </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">TRANG CHỦ</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    DỊCH VỤ
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/register-account">Mở tài khoản</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/trading-instruction">Hướng dẫn giao dịch</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/training-service">Dịch vụ đào tạo</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/consulting">Dịch vụ tư vấn</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    SẢN PHẨM
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Tư vấn chứng khoán phái sinh</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">BÁO CÁO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">KIẾN THỨC</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    VỀ CHÚNG TÔI
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Giới thiệu</a>
                    <a className="dropdown-item" href="#">Liên hệ</a>
                  </div>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input autofocus className={showSearchBar ? "form-control mr-sm-2 search-bar show" : "form-control mr-sm-2 search-bar"}
                  type="search" placeholder="Tìm kiếm" aria-label="Search" />
                <img className='btn-search' alt='icon-search' onClick={()=>this.onClickSearchBar(!showSearchBar)} src={ icSearch } />
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}