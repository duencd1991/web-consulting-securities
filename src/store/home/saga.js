import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import { listGuidelines, listNews, listReports } from "../../services/home";

export function* listHomeGuidelines() {
  yield takeEvery(actions.GUIDELINE_GET_HOME_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listGuidelines();
      if (response.data.statusCode === 1) {
        if (response.data.list) {
          yield put({ type: actions.GUIDELINE_HOME_LIST, list: response.data.list });
        } else {
          yield put({ type: actions.GUIDELINE_HOME_LIST, list: [] });
        }
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* listHomeNews() {
  yield takeEvery(actions.NEWS_GET_HOME_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNews();
      if (response.data.statusCode === 1) {
        if (response.data.list) {
          yield put({ type: actions.NEWS_HOME_LIST, list: response.data.list });
        } else {
          yield put({ type: actions.NEWS_HOME_LIST, list: [] });
        }
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* listHomeReports() {
  yield takeEvery(actions.REPORT_GET_HOME_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listReports();
      if (response.data.statusCode === 1) {
        if (response.data.list) {
          yield put({ type: actions.REPORT_HOME_LIST, list: response.data.list });
        } else {
          yield put({ type: actions.REPORT_HOME_LIST, list: [] });
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
    fork(listHomeGuidelines),
    fork(listHomeNews),
    fork(listHomeReports)
  ]);
}
