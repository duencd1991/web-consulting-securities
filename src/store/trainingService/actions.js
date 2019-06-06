const actions = {
  COURSE_LIST: 'COURSE_LIST',
  COURSE_GET_LIST: 'COURSE_GET_LIST',
  COURSE_LIST_HOT: 'COURSE_LIST_HOT',
  COURSE_GET_LIST_HOT: 'COURSE_GET_LIST_HOT',
  COURSE_LIST_TOP: 'COURSE_LIST_TOP',
  COURSE_GET_LIST_TOP: 'COURSE_GET_LIST_TOP',
  COURSE_LIST_CATEGORY: 'COURSE_LIST_CATEGORY',
  COURSE_GET_LIST_CATEGORY: 'COURSE_GET_LIST_CATEGORY',
  COURSE_GET_DETAIL: 'COURSE_GET_DETAIL',
  COURSE_DETAIL: 'COURSE_DETAIL',
  COURSE_UPDATE: 'COURSE_UPDATE',
  COURSE_CREATE: 'COURSE_CREATE',
  listCourse: (start, limit, type, category, priority) => ({
    type: actions.COURSE_GET_LIST,
    start: start,
    limit: limit,
    type,
    category,
    priority
  }),
  listCourseHot: (priority) => ({
    type: actions.COURSE_GET_LIST_HOT,
    priority
  }),
  listCourseTop: (typeCourse) => ({
    type: actions.COURSE_GET_LIST_TOP,
    typeCourse
  }),
  listCourseCategory: (category) => ({
    type: actions.COURSE_GET_LIST_CATEGORY,
    category
  }),
  getDetail: (id) => ({
    type: actions.COURSE_GET_DETAIL,
    id
  }),
  updateCourse: data => ({
    type: actions.COURSE_UPDATE,
    data
  }),
  createCourse: data => ({
    type: actions.COURSE_CREATE,
    data
  })
};
export default actions;
