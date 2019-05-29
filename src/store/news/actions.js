const actions = {
  NEWS_LIST: 'NEWS_LIST',
  NEWS_GET_LIST: 'NEWS_GET_LIST',
  NEWS_LIST_TOP: 'NEWS_LIST_TOP',
  NEWS_GET_LIST_TOP: 'NEWS_GET_LIST_TOP',
  NEWS_LIST_HOT: 'NEWS_LIST_HOT',
  NEWS_GET_LIST_HOT: 'NEWS_GET_LIST_HOT',
  listNews: (start, limit) => ({
    type: actions.NEWS_GET_LIST,
    start: start,
    limit: limit
  }),
  listNewsHot: () => ({
    type: actions.NEWS_GET_LIST_HOT
  }),
  listNewsTop: () => ({
    type: actions.NEWS_GET_LIST_TOP
  })
};
export default actions;
