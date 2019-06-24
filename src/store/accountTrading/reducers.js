import actions from "./actions";

const initialState = {
  listAccountTrading: [],
  total: 0,
  detail: {}
};

const AccountTrading = (state = initialState, action) => {
  switch (action.type) {
    case actions.ACCOUNT_TRADING_LIST:
      return { ...state, listAccountTrading: action.list, total: action.total };
    case actions.NEWS_DETAIL:
      return { ...state, detail: action.detail };
    default:
      return state;
  }
};

export default AccountTrading;
