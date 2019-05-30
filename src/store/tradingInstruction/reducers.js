import actions from './actions';

const initialState = {
  listType1: [],
  listType2: [],
  listType3: [],
  listTop: [],
  total: 0
};

const GuideLines = (state = initialState, action) => {
  switch (action.type) {
    case actions.GUIDELINE_LIST_TOP:
      return { ...state, listTop: action.list, total: action.total };
    case actions.GUIDELINE_TYPE_1:
      return { ...state, listType1: action.list};
    case actions.GUIDELINE_TYPE_2:
      return { ...state, listType2: action.list};
    case actions.GUIDELINE_TYPE_3:
      return { ...state, listType3: action.list};
    case actions.GUIDELINE_VIEW_UPDATE:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export default GuideLines;