import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import { listRobo, createRobo, updateRobo, changeStatus } from "../../services/roboTrading";
export function* roboCreate() {
  yield takeEvery(actions.ROBO_CREATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createRobo(data.data);
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
export function* roboUpdate() {
  yield takeEvery(actions.ROBO_UPDATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateRobo(data.data);
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
export function* roboChangeStatus() {
  yield takeEvery(actions.ROBO_CHANGE_STATUS, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield roboChangeStatus(data.data);
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
export function* getListRobo() {
  yield takeEvery(actions.ROBO_GET_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield listRobo(data.data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.ROBO_LIST,
          list: response.data.list,
          total: response.data.total
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.ROBO_LIST,
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
export default function* rootSaga() {
  yield all([
    fork(roboChangeStatus),
    fork(roboCreate),
    fork(roboUpdate),
    fork(getListRobo)
  ]);
}
