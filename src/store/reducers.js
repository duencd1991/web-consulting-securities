import { combineReducers } from 'redux';

import Header from './header/reducer';
import Notifys from './notification/reducer';
import Reports from './reports/reducers';
import GuideLines from './tradingInstruction/reducers';
import Home from './home/reducers';

const reducers = combineReducers({
  Header,
  Notifys,
  Reports,
  GuideLines,
  Home
});

export default reducers;