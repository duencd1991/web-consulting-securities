const actions = {
  NEWS_LIST: "NEWS_LIST",
  NEWS_GET_LIST: "NEWS_GET_LIST",
  NEWS_LIST_TOP: "NEWS_LIST_TOP",
  NEWS_GET_LIST_TOP: "NEWS_GET_LIST_TOP",
  NEWS_LIST_HOT: "NEWS_LIST_HOT",
  NEWS_GET_LIST_HOT: "NEWS_GET_LIST_HOT",
  NEWS_UPDATE_VIEWS: "NEWS_UPDATE_VIEWS",
  NEWS_GET_DETAIL: "NEWS_GET_DETAIL",
  NEWS_DETAIL: "NEWS_DETAIL",
  NEWS_UPDATE: "NEWS_UPDATE",
  NEWS_CREATE: "NEWS_CREATE",
  NEWS_DELETE: "NEWS_DELETE",
  listNews: (start, limit, category) => ({
    type: actions.NEWS_GET_LIST,
    start: start,
    limit: limit,
    category
  }),
  listNewsHot: () => ({
    type: actions.NEWS_GET_LIST_HOT
  }),
  listNewsTop: () => ({
    type: actions.NEWS_GET_LIST_TOP
  }),
  updateViews: data => ({
    type: actions.NEWS_UPDATE_VIEWS,
    data
  }),
  getDetail: data => ({
    type: actions.NEWS_GET_DETAIL,
    data
  }),
  updateNews: data => ({
    type: actions.NEWS_UPDATE,
    data
  }),
  createNews: data => ({
    type: actions.NEWS_CREATE,
    data
  }),
  deleteNews: data => ({
    type: actions.NEWS_DELETE,
    data
  })
};
export default actions;
