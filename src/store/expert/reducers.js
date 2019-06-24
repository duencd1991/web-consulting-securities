import actions from "./actions";

const initialState = {
  listCourse: [],
  total: 0,
  detail: {}
};

const Course = (state = initialState, action) => {
  switch (action.type) {
    case actions.COURSE_LIST:
      return { ...state, listCourse: action.list, total: action.total };
    case actions.COURSE_DETAIL:
      return { ...state, detail: action.detail };
    default:
      return state;
  }
};

export default Course;
