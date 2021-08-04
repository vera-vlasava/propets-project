import { FETCH_LOST_RECORDS, ADD_LOST_RECORD } from "../typesList";

export const LostRecordsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOST_RECORDS:
      return { ...state, ...action.payload };

    case ADD_LOST_RECORD:
      return { ...state, list: [...state.list, action.payload] };

    default:
      return state;
  }
};
