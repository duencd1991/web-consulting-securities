import actions from './actions';

const initialState = {
  listTop: [],
  total: 0
};

const GuideLines = (state = initialState, action) => {
  switch (action.type) {
    case actions.GUIDELINE_LIST_TOP:
      return { ...state, listTop: action.list, total: action.total };
    case actions.GUIDELINE_VIEW_UPDATE:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default GuideLines;
