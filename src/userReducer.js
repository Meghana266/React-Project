import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actionTypes';

const initialState = {
  loggedIn: false,
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
