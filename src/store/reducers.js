import { combineReducers } from 'redux';

import Reports from './reports/reducers';
import Header from './header/reducer';
import Notifys from './notification/reducer';

const reducers = combineReducers({
  Reports,
  Header,
  Notifys
});

export default reducers;