const actions = {
  CHAT_CREATE: "CHAT_CREATE",
  CHAT_UPDATE: "CHAT_UPDATE",
  CHAT_GET_LIST: "CHAT_GET_LIST",
  CHAT_LIST: "CHAT_LIST",
  CHAT_GET_HISTORY_ROBO: "CHAT_GET_HISTORY_ROBO",
  CHAT_HISTORY_ROBO: "CHAT_HISTORY_ROBO",
  createChat: data => ({
    type: actions.CHAT_CREATE,
    data
  }),
  listChat: data => ({
    type: actions.CHAT_GET_LIST,
    data
  }),
  historyRobo: data => ({
    type: actions.CHAT_GET_HISTORY_ROBO,
    data
  })
};
export default actions;
