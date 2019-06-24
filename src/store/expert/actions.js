const actions = {
  COURSE_LIST: "COURSE_LIST",
  COURSE_GET_LIST: "COURSE_GET_LIST",
  COURSE_GET_DETAIL: "COURSE_GET_DETAIL",
  COURSE_DETAIL: "COURSE_DETAIL",
  COURSE_UPDATE: "COURSE_UPDATE",
  COURSE_CREATE: "COURSE_CREATE",
  listCourse: (start, limit, category) => ({
    type: actions.COURSE_GET_LIST,
    start: start,
    limit: limit,
    category
  }),
  getDetail: id => ({
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
