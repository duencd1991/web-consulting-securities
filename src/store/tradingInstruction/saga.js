import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  listTop,
  listType,
  updateViews,
  listGuideline,
  create,
  update,
  detail,
  deleteGuideline
} from "../../services/tradingGuideLine";

export function* guideLineListType() {
  yield takeEvery(actions.GUIDELINE_GET_LIST_TYPE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const data1 = {
        start: data.data.start,
        limit: data.data.limit,
        type: 1
      }
      const data2 = {
        start: data.data.start,
        limit: data.data.limit,
        type: 2
      }
      const data3 = {
        start: data.data.start,
        limit: data.data.limit,
        type: 3
      }
      const response1 = yield listType(data1);
      const response2 = yield listType(data2);
      const response3 = yield listType(data3);
      if (response1.status === 200) {
        yield put({
          type: actions.GUIDELINE_TYPE_1,
          list: response1.data.list
        });
      }

      if (response2.status === 200) {
        yield put({
          type: actions.GUIDELINE_TYPE_2,
          list: response2.data.list
        });
      }

      if (response3.status === 200) {
        yield put({
          type: actions.GUIDELINE_TYPE_3,
          list: response3.data.list
        });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}

export function* guideLineListTop() {
  yield takeEvery(actions.GUIDELINE_GET_LIST_TOP, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listTop(data.data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.GUIDELINE_LIST_TOP,
          list: response.data.list,
          total: response.data.total
        });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}

export function* guidelineUpdateView() {
  yield takeEvery(actions.GUIDELINE_VIEW_UPDATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateViews(data.data);
      yield put({
        type: notifyActions.NOTIFY_SHOW,
        message: response.data.code
      });

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* guidelineGetList() {
  yield takeEvery(actions.GUIDELINE_GET_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listGuideline(data.data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.GUIDELINE_LIST,
          list: response.data.list,
          total: response.data.total
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.GUIDELINE_LIST,
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
export function* guidelineCreate() {
  yield takeEvery(actions.GUIDELINE_CREATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield create(data.data);
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
export function* guidelineUpdate() {
  yield takeEvery(actions.GUIDELINE_UPDATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield update(data.data);
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
export function* getGuidelineDetail() {
  yield takeEvery(actions.GUIDELINE_GET_DETAIL, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield detail(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({
            type: actions.GUIDELINE_DETAIL,
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
export function* guidelineDelete() {
  yield takeEvery(actions.GUIDELINE_DELETE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield deleteGuideline(data.data);
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
    fork(guideLineListTop),
    fork(guideLineListType),
    fork(guidelineUpdateView),
    fork(guidelineGetList),
    fork(guidelineCreate),
    fork(guidelineUpdate),
    fork(getGuidelineDetail),
    fork(guidelineDelete)
  ]);
}
