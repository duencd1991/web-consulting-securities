import actions from "./actions";
const initialState = {
  file: ""
};
const UploadFile = (state = initialState, action) => {
  switch (action.type) {
    case actions.FILE_UPLOAD:
      return { ...state, file: action.link };
    default:
      return state;
  }
};

export default UploadFile;