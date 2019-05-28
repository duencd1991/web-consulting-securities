const actions = {
  GUIDELINE_LIST_TOP: 'GUIDELINE_LIST_TOP',
  GUIDELINE_GET_LIST_TOP: 'GUIDELINE_GET_LIST_TOP',
  GUIDELINE_LIST_TYPE: 'GUIDELINE_LIST_TYPE',
  GUIDELINE_GET_LIST_TYPE: 'GUIDELINE_GET_LIST_TYPE',
  GUIDELINE_VIEW_UPDATE: 'GUIDELINE_VIEW_UPDATE',
  listTop: (start, limit) => ({
    type: actions.GUIDELINE_GET_LIST_TOP,
    start,
    limit
  }),
  listType: () => ({
    type: actions.GUIDELINE_LIST_TYPE,
  }),
  updateView: (id) => ({
    type: actions.GUIDELINE_VIEW_UPDATE,
    id
  })
};
export default actions;
