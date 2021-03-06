import actions from "./actions";

const initialState = {
  list: [],
  total: 0,
  detail: {}
};

const Reports = (state = initialState, action) => {
  switch (action.type) {
    case actions.REPORT_LIST:
      return { ...state, list: action.list, total: action.total };
    case actions.REPORT_VIEW_UPDATE:
      return { ...state, status: action.status };
    case actions.REPORT_DETAIL:
      return { ...state, detail: action.detail };
    default:
      return state;
  }
};

export default Reports;
