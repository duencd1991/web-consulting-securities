const actions = {
  USER_GET_LIST: "USER_GET_LIST",
  USER_LIST: "USER_LIST",
  USER_CREATE: "USER_CREATE",
  USER_UPDATE: "USER_UPDATE",
  USER_DELETE: "USER_DELETE",
  USER_DETAIL: "USER_DETAIL",
  USER_GET_DETAIL: "USER_GET_DETAIL",
  USER_LOGIN: "USER_LOGIN",
  USER_LOGOUT: "USER_LOGOUT",
  PROFILE : "PROFILE",
  listUser: data => ({
    type: actions.USER_GET_LIST,
    data
  }),
  createUser: data => ({
    type: actions.USER_CREATE,
    data
  }),
  updateUser: data => ({
    type: actions.USER_UPDATE,
    data
  }),
  deleteUser: data => ({
    type: actions.USER_DELETE,
    data
  }),
  detailUser: data => ({
    type: actions.USER_GET_DETAIL,
    data
  }),
  login: data => ({
    type: actions.USER_LOGIN,
    data
  }),
  logout: () => ({
    type: actions.USER_LOGOUT
  })
};
export default actions;
