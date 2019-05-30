import actions from './actions';
import notifyActions from '../notification/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { listGuidelines, listNews, listReports } from '../../services/home';

export function* listHomeGuidelines(data) {
  yield takeEvery(actions.GUIDELINE_GET_HOME_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listGuidelines();
      if (response.data.statusCode === 1) {
        yield put({ type: actions.GUIDELINE_HOME_LIST, list: response.data.list});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}
export function* listHomeNews(data) {
  yield takeEvery(actions.NEWS_GET_HOME_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNews();
      if (response.data.statusCode === 1) {
        yield put({ type: actions.NEWS_HOME_LIST, list: response.data.list});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}
export function* listHomeReports(data) {
  yield takeEvery(actions.REPORT_GET_HOME_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listReports();
      if (response.data.statusCode === 1) {
        yield put({ type: actions.REPORT_HOME_LIST, list: response.data.list});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
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
