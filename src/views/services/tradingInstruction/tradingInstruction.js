import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';

class TradingInstrucion extends Component {
  render() {
    return(
      <Layout title="">
        <div>
          <h1>Hướng dẫn giao dịch</h1>
          
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

export default connect(mapStateToProps,mapDispatchToProps)(TradingInstrucion);