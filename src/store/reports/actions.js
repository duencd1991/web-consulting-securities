const actions = {
  REPORT_LIST: 'REPORT_LIST',
  REPORT_GET_LIST: 'REPORT_GET_LIST',
  REPORT_VIEW_UPDATE: 'REPORT_VIEW_UPDATE',
  listReport: (start, limit) => ({
    type: actions.REPORT_GET_LIST,
    start,
    limit
  }),
  updateView: (id) => ({
    type: actions.REPORT_VIEW_UPDATE,
    id
  })
};
export default actions;
