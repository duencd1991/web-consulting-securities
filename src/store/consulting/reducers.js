import actions from "./actions";

const initialState = {
  listChat: [],
  historyRobo: [],
  total: 0
};

const Chat = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHAT_LIST:
      return { ...state, listChat: action.list, total: action.total };
    case actions.CHAT_HISTORY_ROBO:
      return { ...state, historyRobo: action.list, total: action.total };
    default:
      return state;
  }
};

export default Chat;
