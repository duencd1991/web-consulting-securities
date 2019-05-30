import actions from './actions';
import notifyActions from '../notification/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import { listTop, listType } from '../../services/tradingGuideLine';

export function* guideLineListType(data) {
  yield takeEvery(actions.GUIDELINE_GET_LIST_TYPE, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response1 = yield listType(data.start, data.limit, 1);
      const response2 = yield listType(data.start, data.limit, 2);
      const response3 = yield listType(data.start, data.limit, 3);
      if (response1.status === 200) {
        yield put({ type: actions.GUIDELINE_TYPE_1, list: response1.data.list});
      }
      
      if (response2.status === 200) {
        yield put({ type: actions.GUIDELINE_TYPE_2, list: response2.data.list});
      }
      
      if (response3.status === 200) {
        yield put({ type: actions.GUIDELINE_TYPE_3, list: response3.data.list});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}

export function* guideLineListTop(data) {
  yield takeEvery(actions.GUIDELINE_GET_LIST_TOP, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listTop(data.start, data.limit);
      if (response.data.statusCode === 1) {
        yield put({ type: actions.GUIDELINE_LIST_TOP, list: response.data.list, total: response.data.total });
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
    }
  });
}

// export function* guidelineUpdateView(data) {
//   yield takeEvery(actions.GUIDELINE_VIEW_UPDATE, function* (data) {
//     try {
//       yield put({ type: notifyActions.NOTIFY_LOADING });

//       const response = yield updateViews(data.id);
//       if (response.status === 200) {
//         if (response.data.statusCode === 1) {
//           yield put({ type: notifyActions.NOTIFY_SUCCESS, message: response.data.message });
//         } else {
//           yield put({ type: notifyActions.NOTIFY_ERROR, error: response.data.message });
//         }
//       }

//       yield put({ type: notifyActions.NOTIFY_LOADING });
//     } catch (error) {
//       yield put({ type: notifyActions.NOTIFY_ERROR, error: error.message });
//     }
//   });
// }

export default function* rootSaga() {
  yield all([
    fork(guideLineListTop),
    fork(guideLineListType)
    // fork(guidelineUpdateView)
  ]);
}
