import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { RouteAdmin } from "./RouteAdmin";
import { RouteCustomerCare } from "./RouteCustomerCare";
import { RouteExpert } from "./RouteExpert";
import { RouteRequireLogin } from "./RouteRequireLogin";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// import component
import history from "../utils/history";
import RootContainer from "./rootContainer";
import Home from "./home";
import ConsultingService from "./services/consultingService/consulting";
import TradingInstrucion from "./services/tradingInstruction/tradingInstruction";
import TrainingService from "./services/trainingService/trainingService";
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
import FormExpert from "./admin/expert/formExpert";
import listExpert from "./admin/expert/listExpert";
import ListRegisterCourse from "./admin/registerCourse/listRegisterCourse";
import ListAccountTrading from "./admin/registerAccountTrading/listRegisterAccountTrading";
import FormUser from "./admin/users/formUser";
import ListUsers from "./admin/users/listUsers";
import SignIn from "./signIn/signIn";
import SignUp from "./signUp/signUp";
import ForgotPassWord from "./forgotPassWord/forgotPassWord";
import GetPassWord from "./forgotPassWord/getPassWord";
import TermsOfUse from "./termsOfUse/termsOfUse";
import ListGuideline from "./admin/guideline/listGuideline";
import FormGuideline from "./admin/guideline/formGuideline";

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/consulting" component={ConsultingService} />
          <Route exact path="/guideline" component={TradingInstrucion} />
          <Route exact path="/training-service" component={TrainingService} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route path="/news" component={News} />
          <Route exact path="/consulting-securities" component={ConsultingSecurities} />
          <Route exact path="/create-trading-account" component={CreateTradingAccount} />
          <Route path="/search-results" component={SearchResults} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/forgot-pass-word" component={ForgotPassWord} />
          <Route exact path="/get-pass-word" component={GetPassWord} />
          <Route exact path="/terms-of-use" component={TermsOfUse} />

          <RouteAdmin exact path="/list-course" component={ListCourse} />
          <RouteAdmin exact path="/create-course" component={FormCourse} />
          <RouteAdmin exact path="/list-user" component={ListUsers} />
          <RouteAdmin exact path="/create-user" component={FormUser} />
          <RouteAdmin exact path="/create-expert" component={FormExpert} />
          <RouteAdmin exact path="/list-expert" component={listExpert} />

          <RouteExpert exact path="/list-news" component={ListNews} />
          <RouteExpert exact path="/create-news" component={FormNews} />
          <RouteExpert exact path="/list-report" component={ListReport} />
          <RouteExpert exact path="/create-report" component={FormReport} />
          <RouteExpert exact path="/list-guideline" component={ListGuideline} />
          <RouteExpert exact path="/create-guideline" component={FormGuideline} />

          <RouteCustomerCare exact path="/list-register-course" component={ListRegisterCourse} />
          <RouteCustomerCare exact path="/list-resgiter-account-trading" component={ListAccountTrading} />
          <Route component={PageNotFound} />
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
