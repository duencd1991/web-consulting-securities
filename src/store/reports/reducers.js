import actions from './actions';

const initialState = {
  list: [],
  total: 0
};

const Reports = (state = initialState, action) => {
  switch (action.type) {
    case actions.REPORT_GET_LIST:
      return { ...state, list: action.list, total: action.total };
    case actions.REPORT_VIEW_UPDATE:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default Reports;
