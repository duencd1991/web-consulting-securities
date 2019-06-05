const actions = {
  REPORT_LIST: 'REPORT_LIST',
  REPORT_GET_LIST: 'REPORT_GET_LIST',
  REPORT_VIEW_UPDATE: 'REPORT_VIEW_UPDATE',
  REPORT_DETAIL: 'REPORT_DETAIL',
  REPORT_GET_DETAIL: 'REPORT_GET_DETAIL',
  REPORT_UPDATE: 'REPORT_UPDATE',
  REPORT_CREATE: 'REPORT_CREATE',
  listReport: (start, limit, reportType) => ({
    type: actions.REPORT_GET_LIST,
    start,
    limit,
    reportType
  }),
  updateViews: (id) => ({
    type: actions.REPORT_VIEW_UPDATE,
    id
  }),
  getDetail: (id) => ({
    type: actions.REPORT_GET_DETAIL,
    id
  }),
  updateReport: data => ({
    type: actions.REPORT_UPDATE,
    data
  }),
  createReport: data => ({
    type: actions.REPORT_CREATE,
    data
  })
};
export default actions;
