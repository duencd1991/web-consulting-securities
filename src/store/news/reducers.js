import actions from './actions';

const initialState = {
  listNews: [],
  total: 0,
  listNewsHot: [],
  listNewsTop: []
};

const News = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEWS_LIST:
      return { ...state, listNews: action.list, total: action.total };
    case actions.NEWS_LIST_HOT:
      return { ...state, listNewsHot: action.list };
    case actions.NEWS_LIST_TOP:
      return { ...state, listNewsTop: action.list };
    default:
      return state;
  }
};

export default News;
