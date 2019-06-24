import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  createAccountTrading,
  listAccountTrading,
  accountTradingDetail
} from "../../services/accountTrading";
export function* accountTradingCreate() {
  yield takeEvery(actions.ACCOUNT_TRADING_CREATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createAccountTrading(data.data);
      yield put({
        type: notifyActions.NOTIFY_SHOW,
        code: response.data.statusCode
      });
      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getListAccountTrading() {
  yield takeEvery(actions.ACCOUNT_TRADING_GET_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield listAccountTrading(data.data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.ACCOUNT_TRADING_LIST,
          list: response.data.list,
          total: response.data.total
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.ACCOUNT_TRADING_LIST,
          list: [],
          total: response.data.total
        });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getAccountTradingDetail() {
  yield takeEvery(actions.ACCOUNT_TRADING_GET_DETAIL, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield accountTradingDetail(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({
            type: actions.ACCOUNT_TRADING_DETAIL,
            detail: response.data.data
          });
        } else {
          yield put({
            type: notifyActions.NOTIFY_SHOW,
            code: response.data.statusCode
          });
        }
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export default function* rootSaga() {
  yield all([
    fork(accountTradingCreate),
    fork(getListAccountTrading),
    fork(getAccountTradingDetail)
  ]);
}
