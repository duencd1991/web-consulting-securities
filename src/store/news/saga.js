import actions from './actions';
import notifyActions from '../notification/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { listNews, listNewsHot, listNewsTop } from '../../services/news';

export function* getListNews(data) {
  yield takeEvery(actions.NEWS_GET_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNews(data.start, data.limit, data.category);
      if (response.data.statusCode === 1) {
        yield put({ type: actions.NEWS_LIST, list: response.data.list, total: response.data.total});
      } else if (response.data.statusCode === 7) {
        yield put({ type: actions.NEWS_LIST, list: [], total: response.data.total});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}
export function* getListNewsTop(data) {
  yield takeEvery(actions.NEWS_GET_LIST_TOP, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNewsTop();
      if (response.data.statusCode === 1) {
        yield put({ type: actions.NEWS_LIST_TOP, list: response.data.list});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}
export function* getListNewHot(data) {
  yield takeEvery(actions.NEWS_GET_LIST_HOT, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNewsHot();
      if (response.data.statusCode === 1) {
        yield put({ type: actions.NEWS_LIST_HOT, list: response.data.list});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getListNews),
    fork(getListNewHot),
    fork(getListNewsTop)
  ]);
}
