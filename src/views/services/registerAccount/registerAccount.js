import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';

class RegisterAccount extends Component {
  render() {
    return(
      <Layout title="">
        <div>
          <h1>Mở tài khoản</h1>
          
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

export default connect(mapStateToProps,mapDispatchToProps)(RegisterAccount);