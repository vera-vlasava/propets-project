import { FETCH_LOST_RECORDS, ADD_LOST_RECORD } from "../typesList";

export const LostRecordsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOST_RECORDS:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
