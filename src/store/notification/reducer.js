import actions from "./actions";
import { ERROR_CODE } from "../../utils/constant";

const initialState = {
  code: "",
  success: null,
  loading: false
};

const Notifys = (state = initialState, action) => {
  let message = "";
  let success = false;
  switch (action.type) {
    case actions.NOTIFY_SHOW:
      for (let i = 0; i < ERROR_CODE.length; i++) {
        if (action.code === ERROR_CODE[i].code) {
          message = ERROR_CODE[i].message;
        }
        if (action.code === 1) {
          success = true;
        }
      }
      return { ...state, message: message, success: success };
    case actions.NOTIFY_CLEAR:
      return { ...state, message: "", success: null };
    case actions.NOTIFY_LOADING:
      return { ...state, loading: !state.loading };
    default:
      return state;
  }
};

export default Notifys;
