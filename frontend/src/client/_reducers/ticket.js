import { GET_MYTICKET } from "../config/constants";

// Setup Reducer for Redux
const initialState = {
  data: [],
  error: false,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_MYTICKET}_PENDING`:
      return {
        ...state,
          loading: true
      };
    case `${GET_MYTICKET}_FULFILLED`:
      return {
        ...state,
          loading: false,
        data: action.payload
      };
    case `${GET_MYTICKET}_REJECTED`:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
