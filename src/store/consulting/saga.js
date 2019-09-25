import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import {
  createChat,
  updateChat,
  listChat
} from "../../services/chatConsulting";
export function* chatCreate() {
  yield takeEvery(actions.CHAT_CREATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createChat(data.data);
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
export function* chatUpdate() {
  yield takeEvery(actions.CHAT_UPDATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateChat(data.data);
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
export function* getListChat() {
  yield takeEvery(actions.CHAT_GET_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield listChat(data.data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.CHAT_LIST,
          list: response.data.list,
          total: response.data.total
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.CHAT_LIST,
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
// export function* getHistoryRobo() {
//   yield takeEvery(actions.CHAT_GET_HISTORY_ROBO, function*(data) {
//     try {
//       yield put({ type: notifyActions.NOTIFY_LOADING });
//       if (data.data.roomId.length > 0) {
//         let listHistory = [];
//         let index = 0;
//         const requestData = data;
//         for(let i = 0; i < requestData.data.roomId.length; i ++) {
//           const temp = requestData.data.roomId[i];
//           const data = {
//             roomId: temp
//           }
//           let response = yield listChat(data);
//           if (response.data.statusCode === 1) {
//             const temp = response.data.list.reverse();
//             listHistory = listHistory.concat(temp);
//             index ++;
//           } else if (response.data.statusCode === 7) {
//             index ++;
//           }
//         }
//         if (index === data.data.roomId.length) {
//           yield put({
//             type: actions.CHAT_HISTORY_ROBO,
//             list: listHistory,
//             total: listHistory.length
//           });
//         }
//       } else {
//         yield put({
//           type: actions.CHAT_HISTORY_ROBO,
//           list: [],
//           total: 0
//         });
//       }
//       yield put({ type: notifyActions.NOTIFY_LOADING });
//     } catch (error) {
//       yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
//     }
//   });
// }
export function* getHistoryRobo() {
  yield takeEvery(actions.CHAT_GET_HISTORY_ROBO, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      if (data.data.roomId.length > 0) {
        const request = {
          roomId: data.data.roomId.toString()
        }
        let response = yield listChat(request);
        if (response.data.statusCode === 1) {
          const listReverse = response.data.list.reverse();
          yield put({
            type: actions.CHAT_HISTORY_ROBO,
            list: listReverse,
            total: response.data.total
          });
        } else if (response.data.statusCode === 7) {
          yield put({
            type: actions.CHAT_HISTORY_ROBO,
            list: [],
            total: 0
          });
        }
      } else {
        yield put({
          type: actions.CHAT_HISTORY_ROBO,
          list: [],
          total: 0
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
    fork(chatCreate),
    fork(chatUpdate),
    fork(getListChat),
    fork(getHistoryRobo)
  ]);
}
