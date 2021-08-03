import {
  ADD_NEW_USER,
  CHANGE_AUTH,
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

      default:
          return state;
  }
}
