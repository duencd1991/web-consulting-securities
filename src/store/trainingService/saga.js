import actions from './actions';
import notifyActions from '../notification/actions';
import { all, fork, put, takeEvery } from 'redux-saga/effects';
import {
  listCourse,
  listCourseHot,
  listCourseTop,
  listCourseCategory,
  courseDetail,
  updateCourse,
  createCourse,
  registerCourse,
  registerCourseList,
  registerCourseDetail
  } from '../../services/trainingService';
export function* getListCourse(data) {
  yield takeEvery(actions.COURSE_GET_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listCourse(data.start, data.limit, data.courseType, data.category, data.priority);
      if (response.data.statusCode === 1) {
        yield put({ type: actions.COURSE_LIST, list: response.data.list, total: response.data.total});
      } else if (response.data.statusCode === 7) {
        yield put({ type: actions.COURSE_LIST, list: [], total: response.data.total});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getListCourseHot(data) {
  yield takeEvery(actions.COURSE_GET_LIST_HOT, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listCourseHot(data.priority);
      if (response.data.statusCode === 1) {
        yield put({ type: actions.COURSE_LIST_HOT, list: response.data.list});
      } else if (response.data.statusCode === 7) {
        yield put({ type: actions.COURSE_LIST_HOT, list: [], total: response.data.total});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getListCourseTop(data) {
  yield takeEvery(actions.COURSE_GET_LIST_TOP, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listCourseTop(data.typeCourse);
      if (response.data.statusCode === 1) {
        yield put({ type: actions.COURSE_LIST_TOP, list: response.data.list});
      } else if (response.data.statusCode === 7) {
        yield put({ type: actions.COURSE_LIST_TOP, list: [], total: response.data.total});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getListCourseCategory(data) {
  yield takeEvery(actions.COURSE_GET_LIST_CATEGORY, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield listCourseCategory(data.category);
      if (response.data.statusCode === 1) {
        yield put({ type: actions.COURSE_LIST_CATEGORY, list: response.data.list});
      } else if (response.data.statusCode === 7) {
        yield put({ type: actions.COURSE_LIST_CATEGORY, list: [], total: response.data.total});
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}

export function* courseUpdate(data) {
  yield takeEvery(actions.COURSE_UPDATE, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield updateCourse(data.data);
      yield put({ type: notifyActions.NOTIFY_SHOW, code: response.data.statusCode });
      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}

export function* courseCreate(data) {
  yield takeEvery(actions.COURSE_CREATE, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield createCourse(data.data);
      yield put({ type: notifyActions.NOTIFY_SHOW, code: response.data.statusCode });
      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* getCourseDetail(data) {
  yield takeEvery(actions.COURSE_GET_DETAIL, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield courseDetail(data.id);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({ type: actions.COURSE_DETAIL, detail: response.data.data });
        } else {
          yield put({ type: notifyActions.NOTIFY_SHOW, code: response.data.statusCode });
        }
      }

      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* courseRegister(data) {
  yield takeEvery(actions.REGISTER_COURSE, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield registerCourse(data.data);
      yield put({ type: notifyActions.NOTIFY_SHOW, code: response.data.statusCode });
      
      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* courseRegisterList(data) {
  yield takeEvery(actions.REGISTER_COURSE_GET_LIST, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield registerCourseList(data.data);
      if (response.data.statusCode === 1) {
        yield put({ type: actions.REGISTER_COURSE_LIST, list: response.data.list, total: response.data.total});
      } else if (response.data.statusCode === 7) {
        yield put({ type: actions.REGISTER_COURSE_LIST, list: [], total: response.data.total});
      }
      
      yield put({ type: notifyActions.NOTIFY_LOADING });
    } catch (error) {
      yield put({ type: notifyActions.NOTIFY_SHOW, code: 0 });
    }
  });
}
export function* courseRegisterDetail(data) {
  yield takeEvery(actions.COURSE_CREATE, function* (data) {
    try {
      yield put({ type: notifyActions.NOTIFY_LOADING });

      const response = yield registerCourseDetail(data.data);
      if (response.status === 200) {
        if (response.data.statusCode === 1) {
          yield put({ type: actions.REGISTER_COURSE_DETAIL, detail: response.data.data });
        } else {
          yield put({ type: notifyActions.NOTIFY_SHOW, code: response.data.statusCode });
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
    fork(getListCourse),
    fork(getListCourseCategory),
    fork(getListCourseHot),
    fork(getListCourseTop),
    fork(getCourseDetail),
    fork(courseUpdate),
    fork(courseCreate),
    fork(courseRegister),
    fork(courseRegisterList),
    fork(courseRegisterDetail)
  ]);
}