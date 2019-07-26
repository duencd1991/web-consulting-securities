const actions = {
  ROBO_CREATE: "ROBO_CREATE",
  ROBO_UPDATE: "ROBO_UPDATE",
  ROBO_GET_LIST: "ROBO_GET_LIST",
  ROBO_LIST: "ROBO_LIST",
  ROBO_CHANGE_STATUS: "ROBO_CHANGE_STATUS",
  createRobo: data => ({
    type: actions.ROBO_CREATE,
    data
  }),
  updateRobo: data => ({
    type: actions.ROBO_UPDATE,
    data
  }),
  changeStatusRobo: data => ({
    type: actions.ROBO_CHANGE_STATUS,
    data
  }),
  listRobo: data => ({
    type: actions.ROBO_GET_LIST,
    data
  })
};
export default actions;
