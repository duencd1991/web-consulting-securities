const actions = {
  EXPERT_LIST: "EXPERT_LIST",
  EXPERT_GET_LIST: "EXPERT_GET_LIST",
  EXPERT_GET_DETAIL: "EXPERT_GET_DETAIL",
  EXPERT_DETAIL: "EXPERT_DETAIL",
  EXPERT_UPDATE: "EXPERT_UPDATE",
  EXPERT_CREATE: "EXPERT_CREATE",
  EXPERT_DELETE: "EXPERT_DELETE",
  listExpert: data => ({
    type: actions.EXPERT_GET_LIST,
    data
  }),
  getDetail: data => ({
    type: actions.EXPERT_GET_DETAIL,
    data
  }),
  updateExpert: data => ({
    type: actions.EXPERT_UPDATE,
    data
  }),
  createExpert: data => ({
    type: actions.EXPERT_CREATE,
    data
  }),
  deleteExpert: data => ({
    type: actions.EXPERT_DELETE,
    data
  })
};
export default actions;
