import actions from './actions';
import notifyActions from '../notification/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { list, updateViews } from '../../services/report';

export function* reportList(data) {
  yield takeEvery(actions.REPORT_GET_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield list(data.start, data.limit, data.reportType);
      if (response.status === 200) {
        yield put({ type: actions.REPORT_LIST, list: response.data.list, total: response.data.total });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}

export function* reportUpdateView(data) {
  yield takeEvery(actions.REPORT_VIEW_UPDATE, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateViews(data.id);
      yield put({ type: notifyActions.NOTIFY_SHOW, message: response.data.code });

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(reportList),
    fork(reportUpdateView)
  ]);
}
