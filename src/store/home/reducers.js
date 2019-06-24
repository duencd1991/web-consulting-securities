import actions from "./actions";

const initialState = {
  listGuidelines: [],
  listNews: [],
  listReports: []
};

const Home = (state = initialState, action) => {
  switch (action.type) {
    case actions.GUIDELINE_HOME_LIST:
      return { ...state, listGuidelines: action.list };
    case actions.NEWS_HOME_LIST:
      return { ...state, listNews: action.list };
    case actions.REPORT_HOME_LIST:
      return { ...state, listReports: action.list };
    default:
      return state;
  }
};

export default Home;
