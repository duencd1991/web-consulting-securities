import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';

class TrainingService extends Component {
  render() {
    return(
      <Layout title="">
        <div>
          <h1>Dịch vụ đào tạo</h1>
          
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

export default connect(mapStateToProps,mapDispatchToProps)(TrainingService);