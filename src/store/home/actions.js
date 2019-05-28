const actions = {
  GUIDELINE_LIST: 'GUIDELINE_LIST',
  GUIDELINE_GET_LIST: 'GUIDELINE_GET_LIST',
  NEWS_LIST: 'NEWS_LIST',
  NEWS_GET_LIST: 'NEWS_GET_LIST',
  REPORT_LIST: 'REPORT_LIST',
  REPORT_GET_LIST: 'REPORT_GET_LIST',
  listNews: () => ({
    type: actions.NEWS_GET_LIST
  }),
  listGuidelines: () => ({
    type: actions.GUIDELINE_GET_LIST
  }),
  listReports: () => ({
    type: actions.REPORT_GET_LIST
  }),
};
export default actions;
