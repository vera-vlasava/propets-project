import { FETCH_FOUND_RECORDS, ADD_FOUND_RECORD } from "../typesList";

export const FoundRecordsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_FOUND_RECORDS:
      return { ...state, ...action.payload };

    case ADD_FOUND_RECORD:
      return { ...state, list: [...state.list, action.payload] };

    default:
      return state;
  }
};
