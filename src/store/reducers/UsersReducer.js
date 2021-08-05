import {
  ADD_NEW_USER,
  CHANGE_AUTH,
  EDIT_USER,
  GET_USER_BY_ID,
} from "../typesList";

export const UsersReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case CHANGE_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };

    case GET_USER_BY_ID:
      return {
        ...state,
        getUserById: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        getUserById: action.payload,
      };

    default:
      return state;
  }
};
