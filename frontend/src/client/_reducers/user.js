import {
  GET_USERS
} from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  error: false,
  loading: false,
  isLogin:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        loading: true,
        isLogin:false
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
          loading: false,
          data: action.payload,
          isLogin:true
      };
    case `${GET_USERS}_REJECTED`:
      return {
        ...state,
        error: action.payload.response.data.message,
          loading: false,
          isLogin:false
      };
    default:
      return state;
  }
};

export default reducer;