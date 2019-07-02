const actions = {
  EXPERT_LIST: "EXPERT_LIST",
  EXPERT_GET_LIST: "EXPERT_GET_LIST",
  EXPERT_GET_DETAIL: "EXPERT_GET_DETAIL",
  EXPERT_DETAIL: "EXPERT_DETAIL",
  EXPERT_UPDATE: "EXPERT_UPDATE",
  EXPERT_CREATE: "EXPERT_CREATE",
  listExpert: data => ({
    type: actions.EXPERT_GET_LIST,
    data
  }),
  getDetail: id => ({
    type: actions.EXPERT_GET_DETAIL,
    id
  }),
  updateExpert: data => ({
    type: actions.EXPERT_UPDATE,
    data
  }),
  createExpert: data => ({
    type: actions.EXPERT_CREATE,
    data
  })
};
export default actions;
