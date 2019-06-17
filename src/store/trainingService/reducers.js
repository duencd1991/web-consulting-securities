import actions from './actions';

const initialState = {
  listCourse: [],
  listCourseTop: [],
  listCourseHot: [],
  listCourseCategory: [],
  listRegisterCourse: [],
  total: 0,
  detail: {},
  registerDetail: {}
};

const TrainingService = (state = initialState, action) => {
  switch (action.type) {
    case actions.COURSE_LIST:
      return { ...state, listCourse: action.list, total: action.total };
    case actions.COURSE_LIST_HOT:
      return { ...state, listCourseHot: action.list };
    case actions.COURSE_LIST_TOP:
      return { ...state, listCourseTop: action.list };
    case actions.COURSE_LIST_CATEGORY:
      return { ...state, listCourseCategory: action.list };
    case actions.COURSE_DETAIL:
      return { ...state, detail: action.detail };
    case actions.REGISTER_COURSE_LIST:
      return { ...state, listRegisterCourse: action.list, total: action.total };
    case actions.REGISTER_COURSE_DETAIL:
      return { ...state, registerDetail: action.detail };
    default:
      return state;
  }
};

export default TrainingService;
