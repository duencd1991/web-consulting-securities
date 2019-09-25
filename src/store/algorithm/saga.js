import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  createAlgorithm,
  listAlgorithm,
  detailAlgorithm,
  updateAlgorithm
} from "../../services/algorithm";
export function* algorithmCreate() {
  yield takeEvery(actions.ALGORITHM_CREATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createAlgorithm(data.data);
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
export function* algorithmUpdate() {
  yield takeEvery(actions.ALGORITHM_UPDATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield updateAlgorithm(data.data);
      if (response.status === 200) {
        yield put({
          type: notifyActions.NOTIFY_SHOW,
          code: response.data.statusCode
        });
      }
      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getListAgorithm() {
  yield takeEvery(actions.ALGORITHM_GET_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield listAlgorithm(data.data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.ALGORITHM_LIST,
          list: response.data.list,
          total: response.data.total
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.ALGORITHM_LIST,
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
export function* getAlgorithmDetail() {
  yield takeEvery(actions.ALGORITHM_GET_DETAIL, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield detailAlgorithm(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({
            type: actions.ALGORITHM_DETAIL,
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
    fork(algorithmCreate),
    fork(algorithmUpdate),
    fork(getAlgorithmDetail),
    fork(getListAgorithm)
  ]);
}
