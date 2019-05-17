import React, { Component } from 'react';
import Layout from '../layout/layout';
import { connect } from 'react-redux';
import './aboutUs.scss';

class AboutUs extends Component {
  render() {
    return(
      <Layout>
        <div className='about-us-page'>
          <div className='about-us-banner'>
          
          </div>
          <div className='layout-team'></div>
          <div className='layout-contact'></div>
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

export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);