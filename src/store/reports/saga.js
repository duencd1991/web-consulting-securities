import actions from './actions';
import notifyActions from '../notification/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { list, updateViews } from '../../services/report';

export function* reportList(data) {
  yield takeEvery(actions.REPORT_GET_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield list(data.start, data.limit);
      if (response.status === 200) {
        yield put({ type: actions.REPORT_LIST, list: response.data.list, total: response.data.total });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}

export function* reportUpdateView(data) {
  yield takeEvery(actions.ALGORITHM_CHANGE_STATUS, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateViews(data.id, data.views);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({ type: notifyActions.NOTIFY_SUCCESS, message: response.data.message });
        } else {
          yield put({ type: notifyActions.NOTIFY_ERROR, error: response.data.message });
        }
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(reportList),
    fork(reportUpdateView)
  ]);
}
