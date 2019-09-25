import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import history from "../../utils/history";
import {
  createUser, updateUser, deleteUser, listUser, detailUser, login, changePass, resetPass
} from "../../services/user";
export function* userCreate() {
  yield takeEvery(actions.USER_CREATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createUser(data.data);
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
export function* userUpdate() {
  yield takeEvery(actions.USER_UPDATE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateUser(data.data);
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
export function* userDelete() {
  yield takeEvery(actions.USER_DELETE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield deleteUser(data.data);
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
export function* getListUser() {
  yield takeEvery(actions.USER_GET_LIST, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listUser(data.data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.USER_LIST,
          list: response.data.list,
          total: response.data.total
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.USER_LIST,
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
export function* getUserDetail() {
  yield takeEvery(actions.USER_GET_DETAIL, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield detailUser(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({
            type: actions.USER_DETAIL,
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
export function* userLogin() {
  yield takeEvery(actions.USER_LOGIN, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield login(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield history.push({ pathname: '/' });
          yield put({
            type: notifyActions.NOTIFY_SHOW,
            code: response.data.statusCode
          });
          yield put({ type: actions.PROFILE, profile: response.data.data });
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
export function* userChangePass() {
  yield takeEvery(actions.CHANGE_PASS, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield changePass(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield history.push({ pathname: '/sign-in' });
          yield put({
            type: notifyActions.NOTIFY_SHOW,
            code: response.data.statusCode
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
export function* userResetPass() {
  yield takeEvery(actions.RESET_PASS, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield resetPass(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({
            type: notifyActions.NOTIFY_SHOW,
            code: response.data.statusCode
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
    fork(userCreate),
    fork(userUpdate),
    fork(userDelete),
    fork(userLogin),
    fork(getListUser),
    fork(getUserDetail),
    fork(userChangePass),
    fork(userResetPass)
  ]);
}
