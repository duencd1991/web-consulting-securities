import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import component
import history from '../utils/history';
import RootContainer from './rootContainer';
import Home from './home';
import ConsultingService from './services/consultingService/consulting';
import TradingInstrucion from './services/tradingInstruction/tradingInstruction';
import TrainingService from './services/trainingService/trainingService';
import RegisterAccount from './services/registerAccount/registerAccount';
import Report from './report/report';
import AboutUs from './aboutUs/aboutUs';
import PageNotFound from './pageNotFound/pageNotFound';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/consulting" component={ConsultingService} />
          <Route exact path="/trading-instruction" component={TradingInstrucion} />
          <Route exact path="/training-service" component={TrainingService} />
          <Route exact path="/register-account" component={RegisterAccount} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route component={PageNotFound}></Route>
        </Switch>
      </RootContainer>
    </Router>
  );
};
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool
};
const mapStateToProps = () => {
  return {
    // isLoggedIn: state.User.token !== null ? true : false
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
