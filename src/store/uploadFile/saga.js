import actions from "./actions";
import notifyActions from "../notification/actions";
import { all, fork, put, takeEvery } from "redux-saga/effects";
import { uploadFile } from "../../services/uploadFile";
export function* getUploadFile() {
  yield takeEvery(actions.GET_UPLOAD_FILE, function*(data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });
      const response = yield uploadFile(data);
      if (response.data.statusCode === 1) {
        yield put({
          type: actions.FILE_UPLOAD,
          link: response.data.data
        });
      } else if (response.data.statusCode === 7) {
        yield put({
          type: actions.notifyActions,
          code: 0
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
    fork(getListCourse),
    fork(getListCourseCategory),
    fork(getListCourseHot),
    fork(getListCourseTop),
    fork(getCourseDetail),
    fork(courseUpdate),
    fork(courseCreate),
    fork(courseRegister),
    fork(courseRegisterList),
    fork(courseRegisterDetail),
    fork(courseRegisterChangeStatus),
    fork(deleteCourse)
  ]);
}
