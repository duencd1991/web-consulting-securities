const actions = {
  CHAT_CREATE: "CHAT_CREATE",
  CHAT_UPDATE: "CHAT_UPDATE",
  CHAT_GET_LIST: "CHAT_GET_LIST",
  CHAT_LIST: "CHAT_LIST",
  createChat: data => ({
    type: actions.CHAT_CREATE,
    data
  }),
  listChat: data => ({
    type: actions.CHAT_GET_LIST,
    data
  })
};
export default actions;
