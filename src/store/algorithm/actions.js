const actions = {
  ALGORITHM_CREATE: "ALGORITHM_CREATE",
  ALGORITHM_UPDATE: "ALGORITHM_UPDATE",
  ALGORITHM_DELETE: "ALGORITHM_DELETE",
  ALGORITHM_GET_LIST: "ALGORITHM_GET_LIST",
  ALGORITHM_LIST: "ALGORITHM_LIST",
  ALGORITHM_GET_DETAIL: "ALGORITHM_GET_DETAIL",
  ALGORITHM_DETAIL: "ALGORITHM_DETAIL",
  createAlgorithm: data => ({
    type: actions.ALGORITHM_CREATE,
    data
  }),
  updateAlgorithm: data => ({
    type: actions.ALGORITHM_UPDATE,
    data
  }),
  listAlgorithm: data => ({
    type: actions.ALGORITHM_GET_LIST,
    data
  }),
  algorithmDetail: data => ({
    type: actions.ALGORITHM_GET_DETAIL,
    data
  }),
  algorithmDelete: data => ({
    type: actions.ALGORITHM_DELETE,
    data
  })
};
export default actions;
