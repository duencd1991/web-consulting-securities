import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import component
<<<<<<< Updated upstream
import history from "../utils/history";
import RootContainer from "./rootContainer";
import Home from "./home";
import ConsultingService from "./services/consultingService/consulting";
import TradingInstrucion from "./services/tradingInstruction/tradingInstruction";
import TrainingService from "./services/trainingService/trainingService";
import RegisterAccount from "./services/registerAccount/registerAccount";
import Report from "./report/report";
import AboutUs from "./aboutUs/aboutUs";
import News from "./news/news";
import ListNews from "./admin/news/listNews";
import FormNews from "./admin/news/formNews";
import ConsultingSecurities from "./consultingSecurities/consultingSecurities";
import PageNotFound from "./pageNotFound/pageNotFound";
import CreateTradingAccount from "./createTradingAccount/createTradingAccount";
import SearchResults from "./searchResults/searchResults";
import ListReport from "./admin/report/listReport";
import FormReport from "./admin/report/formReport";
import ListCourse from "./admin/course/listCourse";
import FormCourse from "./admin/course/formCourse";
import ListRegisterCourse from "./admin/registerCourse/listRegisterCourse";
import ListAccountTrading from "./admin/registerAccountTrading/listRegisterAccountTrading";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import ForgotPassWord from "./forgotPassWord/forgotPassWord";
import GetPassWord from "./forgotPassWord/getPassWord";
=======
import history from '../utils/history';
import RootContainer from './rootContainer';
import Home from './home';
import ConsultingService from './services/consultingService/consulting';
import TradingInstrucion from './services/tradingInstruction/tradingInstruction';
import TrainingService from './services/trainingService/trainingService';
import RegisterAccount from './services/registerAccount/registerAccount';
import Report from './report/report';
import AboutUs from './aboutUs/aboutUs';
import News from './news/news';
import ListNews from './admin/news/listNews';
import FormNews from './admin/news/formNews';
import ConsultingSecurities from './consultingSecurities/consultingSecurities';
import PageNotFound from './pageNotFound/pageNotFound';
import CreateTradingAccount from './createTradingAccount/createTradingAccount';
import SearchResults from './searchResults/searchResults';
import ListReport from './admin/report/listReport';
import FormReport from './admin/report/formReport';
import ListCourse from './admin/course/listCourse';
import FormCourse from './admin/course/formCourse';
import ListRegisterCourse from './admin/registerCourse/listRegisterCourse';
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import TermsOfUse from './termsOfUse/termsOfUse';
import ForgotPassWord from './forgotPassWord/forgotPassWord';
import GetPassWord from './forgotPassWord/getPassWord';

>>>>>>> Stashed changes

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/consulting" component={ConsultingService} />
          <Route
            exact
            path="/trading-instruction"
            component={TradingInstrucion}
          />
          <Route exact path="/training-service" component={TrainingService} />
          <Route exact path="/register-account" component={RegisterAccount} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route path="/news" component={News} />
          <Route
            exact
            path="/consulting-securities"
            component={ConsultingSecurities}
          />
          <Route
            exact
            path="/create-trading-account"
            component={CreateTradingAccount}
          />
          <Route path="/search-results" component={SearchResults} />
<<<<<<< Updated upstream
          <Route exact path="/list-news" component={ListNews} />
          <Route exact path="/create-news" component={FormNews} />
          <Route exact path="/list-report" component={ListReport} />
          <Route exact path="/list-course" component={ListCourse} />
          <Route
            exact
            path="/list-register-course"
            component={ListRegisterCourse}
          />
          <Route
            exact
            path="/list-resgiter-account-trading"
            component={ListAccountTrading}
          />
          <Route exact path="/create-course" component={FormCourse} />
          <Route exact path="/create-report" component={FormReport} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-pass-word" component={ForgotPassWord} />
          <Route exact path="/get-pass-word" component={GetPassWord} />
=======
          <Route exact path='/list-news' component={ListNews} />
          <Route exact path='/create-news' component={FormNews} />
          <Route exact path='/list-report' component={ListReport} />
          <Route exact path='/list-course' component={ListCourse} />
          <Route exact path='/list-register-course' component={ListRegisterCourse} />
          <Route exact path='/create-course' component={FormCourse} />
          <Route exact path='/create-report' component={FormReport} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/forgot-pass-word' component={ForgotPassWord}/>
          <Route exact path='/get-pass-word' component={GetPassWord}/>
          <Route exact path='/terms-of-use' component={TermsOfUse}/>
>>>>>>> Stashed changes
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
