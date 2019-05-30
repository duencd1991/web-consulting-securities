const actions = {
  GUIDELINE_LIST_TOP: 'GUIDELINE_LIST_TOP',
  GUIDELINE_GET_LIST_TOP: 'GUIDELINE_GET_LIST_TOP',
  GUIDELINE_GET_LIST_TYPE: 'GUIDELINE_GET_LIST_TYPE',
  GUIDELINE_TYPE_1: 'GUIDELINE_TYPE_1',
  GUIDELINE_TYPE_2: 'GUIDELINE_TYPE_2',
  GUIDELINE_TYPE_3: 'GUIDELINE_TYPE_3',
  GUIDELINE_VIEW_UPDATE: 'GUIDELINE_VIEW_UPDATE',
  listTop: (start, limit) => ({
    type: actions.GUIDELINE_GET_LIST_TOP,
    start,
    limit
  }),
  listType: (start, limit) => ({
    type: actions.GUIDELINE_GET_LIST_TYPE,
    start,
    limit
  }),
  updateView: (id) => ({
    type: actions.GUIDELINE_VIEW_UPDATE,
    id
  })
};
export default actions;
