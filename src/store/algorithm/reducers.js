import actions from "./actions";

const initialState = {
  listAlgorithm: [],
  total: 0,
  detail: {}
};

const Algorithm = (state = initialState, action) => {
  switch (action.type) {
    case actions.ALGORITHM_LIST:
      return { ...state, listAlgorithm: action.list, total: action.total };
    case actions.ALGORITHM_DETAIL:
      return { ...state, detail: action.detail };
    default:
      return state;
  }
};

export default Algorithm;
