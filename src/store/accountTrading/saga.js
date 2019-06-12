import actions from './actions';
import notifyActions from '../notification/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { createAccountTrading } from '../../services/accountTrading';
export function* accountTradingCreate(data) {
  yield takeEvery(actions.ACCOUNT_TRADING_CREATE, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createAccountTrading(data.data);
      yield put({ type: notifyActions.NOTIFY_SHOW, code: response.data.statusCode });
      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export default function* rootSaga() {
  yield all([fork(accountTradingCreate)]);
}