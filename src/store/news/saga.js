import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  listNews,
  listNewsHot,
  listNewsTop,
  updateViews,
  newsDetail,
  updateNews,
  createNews,
  newsDelete
} from "../../services/news";

export function* getListNews() {
  yield takeEvery(actions.NEWS_GET_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNews(data.start, data.limit, data.category);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.NEWS_LIST,
          list: response.data.list,
          total: response.data.total
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.NEWS_LIST,
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
export function* getListNewsTop() {
  yield takeEvery(actions.NEWS_GET_LIST_TOP, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNewsTop();
      if (response.data.statusCode === 1) {
        yield put({ type: actions.NEWS_LIST_TOP, list: response.data.list });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getListNewHot() {
  yield takeEvery(actions.NEWS_GET_LIST_HOT, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listNewsHot();
      if (response.data.statusCode === 1) {
        yield put({ type: actions.NEWS_LIST_HOT, list: response.data.list });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* newsUpdate() {
  yield takeEvery(actions.NEWS_UPDATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateNews(data.data);
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
export function* newsUpdateViews() {
  yield takeEvery(actions.NEWS_UPDATE_VIEWS, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateViews(data.data);
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
export function* newsCreate() {
  yield takeEvery(actions.NEWS_CREATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createNews(data.data);
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
export function* getNewsDetail() {
  yield takeEvery(actions.NEWS_GET_DETAIL, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield newsDetail(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({ type: actions.NEWS_DETAIL, detail: response.data.data });
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
export function* deleteNews() {
  yield takeEvery(actions.NEWS_DELETE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield newsDelete(data.data);
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
export default function* rootSaga() {
  yield all([
    fork(getListNews),
    fork(getListNewHot),
    fork(getListNewsTop),
    fork(newsUpdateViews),
    fork(getNewsDetail),
    fork(newsUpdate),
    fork(newsCreate),
    fork(deleteNews)
  ]);
}
