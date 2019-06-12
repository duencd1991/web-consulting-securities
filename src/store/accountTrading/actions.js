const actions = {
  ACCOUNT_TRADING_CREATE: 'ACCOUNT_TRADING_CREATE',
  createAccountTrading: data => ({
    type: actions.ACCOUNT_TRADING_CREATE,
    data
  })
}
export default actions;
