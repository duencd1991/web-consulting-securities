import actions from './actions';

const initialState = {
  listCourse: [],
  listCourseTop: [],
  listCourseHot: [],
  listCourseCategory: [],
  total: 0,
  detail: {}
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
    case actions.NEWS_DETAIL:
      return { ...state, detail: action.detail };
    default:
      return state;
  }
};

export default TrainingService;
