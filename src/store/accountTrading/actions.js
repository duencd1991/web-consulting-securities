const actions = {
  ACCOUNT_TRADING_CREATE: "ACCOUNT_TRADING_CREATE",
  ACCOUNT_TRADING_GET_LIST: "ACCOUNT_TRADING_GET_LIST",
  ACCOUNT_TRADING_LIST: "ACCOUNT_TRADING_LIST",
  ACCOUNT_TRADING_GET_DETAIL: "ACCOUNT_TRADING_GET_DETAIL",
  ACCOUNT_TRADING_DETAIL: "ACCOUNT_TRADING_DETAIL",
  ACCOUNT_TRADING_CHANGE_STATUS: "ACCOUNT_TRADING_CHANGE_STATUS",
  createAccountTrading: data => ({
    type: actions.ACCOUNT_TRADING_CREATE,
    data
  }),
  listAccountTrading: data => ({
    type: actions.ACCOUNT_TRADING_GET_LIST,
    data
  }),
  accountTradingDetail: data => ({
    type: actions.ACCOUNT_TRADING_GET_DETAIL,
    data
  }),
  accountTradingChangeStatus: data => ({
    type: actions.ACCOUNT_TRADING_CHANGE_STATUS,
    data
  })
};
export default actions;
