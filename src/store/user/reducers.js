import actions from "./actions";

const initialState = {
  listUser: [],
  total: 0,
  detail: {},
  profile: {}
};

const Users = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LIST:
      return { ...state, listUser: action.list, total: action.total };
    case actions.USER_DETAIL:
      return { ...state, detail: action.detail };
    case actions.PROFILE:
      return { ...state, profile: { ...state.profile, ...action.profile } };
    case actions.USER_LOGOUT:
      return { ...state, profile: {}}
    default:
      return state;
  }
};

export default Users;
