const actions = {
  NOTIFY_SHOW: "NOTIFY_SHOW",
  NOTIFY_CLEAR: "NOTIFY_CLEAR",
  NOTIFY_LOADING: "NOTIFY_LOADING",

  showNotify: message => ({
    type: actions.NOTIFY_SHOW,
    message
  }),
  clearNotify: () => ({
    type: actions.NOTIFY_CLEAR
  }),
  loading: () => ({
    type: actions.NOTIFY_LOADING
  })
};
export default actions;
