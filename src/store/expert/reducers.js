import actions from "./actions";

const initialState = {
  listExpert: [],
  total: 0,
  detail: {}
};

const Expert = (state = initialState, action) => {
  switch (action.type) {
    case actions.EXPERT_LIST:
      return { ...state, listExpert: action.list, total: action.total };
    case actions.EXPERT_DETAIL:
      return { ...state, detail: action.detail };
    default:
      return state;
  }
};

export default Expert;
