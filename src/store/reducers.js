import { combineReducers } from "redux";

import Header from "./header/reducer";
import Notifys from "./notification/reducer";
import Reports from "./reports/reducers";
import GuideLines from "./tradingInstruction/reducers";
import Home from "./home/reducers";
import News from "./news/reducers";
import TrainingService from "./trainingService/reducers";
import AccountTrading from "./accountTrading/reducers";
import Expert from "./expert/reducers";
import ChatConsulting from "./consulting/reducers";

const reducers = combineReducers({
  Header,
  Notifys,
  Reports,
  GuideLines,
  Home,
  News,
  TrainingService,
  AccountTrading,
  Expert,
  ChatConsulting
});

export default reducers;
