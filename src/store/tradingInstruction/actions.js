const actions = {
  GUIDELINE_GET_LIST: "GUIDELINE_GET_LIST",
  GUIDELINE_LIST: "GUIDELINE_LIST",
  GUIDELINE_LIST_TOP: "GUIDELINE_LIST_TOP",
  GUIDELINE_GET_LIST_TOP: "GUIDELINE_GET_LIST_TOP",
  GUIDELINE_GET_LIST_TYPE: "GUIDELINE_GET_LIST_TYPE",
  GUIDELINE_TYPE_1: "GUIDELINE_TYPE_1",
  GUIDELINE_TYPE_2: "GUIDELINE_TYPE_2",
  GUIDELINE_TYPE_3: "GUIDELINE_TYPE_3",
  GUIDELINE_VIEW_UPDATE: "GUIDELINE_VIEW_UPDATE",
  GUIDELINE_CREATE: "GUIDELINE_CREATE",
  GUIDELINE_UPDATE: "GUIDELINE_UPDATE",
  GUIDELINE_GET_DETAIL: "GUIDELINE_GET_DETAIL",
  GUIDELINE_DETAIL: "GUIDELINE_DETAIL",
  GUIDELINE_DELETE: "GUIDELINE_DELETE",
  getDetail: data => ({
    type: actions.GUIDELINE_GET_DETAIL,
    data
  }),
  deleteGuideline: data => ({
    type: actions.GUIDELINE_DELETE,
    data
  }),
  listGuideline: data => ({
    type: actions.GUIDELINE_GET_LIST,
    data
  }),
  createGuideline: data => ({
    type: actions.GUIDELINE_CREATE,
    data
  }),
  updateGuideline: data => ({
    type: actions.GUIDELINE_UPDATE,
    data
  }),
  listTop: data => ({
    type: actions.GUIDELINE_GET_LIST_TOP,
    data
  }),
  listType: data => ({
    type: actions.GUIDELINE_GET_LIST_TYPE,
    data
  }),
  updateViews: data => ({
    type: actions.GUIDELINE_VIEW_UPDATE,
    data
  })
};
export default actions;
