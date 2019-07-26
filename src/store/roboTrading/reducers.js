import actions from "./actions";

const initialState = {
  listRobo: [],
  total: 0
};

const Robos = (state = initialState, action) => {
  switch (action.type) {
    case actions.ROBO_LIST:
      return { ...state, listRobo: action.list, total: action.total };
    default:
      return state;
  }
};

export default Robos;
