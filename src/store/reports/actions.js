const actions = {
  REPORT_LIST: 'REPORT_LIST',
  REPORT_GET_LIST: 'REPORT_GET_LIST',
  REPORT_VIEW_UPDATE: 'REPORT_VIEW_UPDATE',
  list: (size) => ({
    type: actions.REPORT_GET_LIST,
    size
  }),
  updateView: (id, views) => ({
    type: actions.REPORT_VIEW_UPDATE,
    id,
    views
  })
};
export default actions;
