const actions = {
  NEWS_LIST: 'NEWS_LIST',
  NEWS_GET_LIST: 'NEWS_GET_LIST',
  NEWS_LIST_TOP: 'NEWS_LIST_TOP',
  NEWS_GET_LIST_TOP: 'NEWS_GET_LIST_TOP',
  NEWS_LIST_HOT: 'NEWS_LIST_HOT',
  NEWS_GET_LIST_HOT: 'NEWS_GET_LIST_HOT',
  NEWS_UPDATE_VIEWS: 'NEWS_UPDATE_VIEWS',
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
  updateViews: (id) => ({
    type: actions.NEWS_UPDATE_VIEWS,
    id
  })
};
export default actions;
