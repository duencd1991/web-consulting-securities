const actions = {
  GUIDELINE_HOME_LIST: "GUIDELINE_HOME_LIST",
  GUIDELINE_GET_HOME_LIST: "GUIDELINE_GET_HOME_LIST",
  NEWS_HOME_LIST: "NEWS_HOME_LIST",
  NEWS_GET_HOME_LIST: "NEWS_GET_HOME_LIST",
  REPORT_HOME_LIST: "REPORT_HOME_LIST",
  REPORT_GET_HOME_LIST: "REPORT_GET_HOME_LIST",
  listNews: () => ({
    type: actions.NEWS_GET_HOME_LIST
  }),
  listGuidelines: () => ({
    type: actions.GUIDELINE_GET_HOME_LIST
  }),
  listReports: () => ({
    type: actions.REPORT_GET_HOME_LIST
  })
};
export default actions;
