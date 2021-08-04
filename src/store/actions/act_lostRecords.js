import { FETCH_LOST_RECORDS, ADD_LOST_RECORD } from "../typesList";
import { URL } from "../utilites";

export const getLostRecords = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/lostfounds/lost`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
      });
      const data = await response.json();

      await dispatch(fetchLostRecords({ list: data }));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addNewLost = (data) => {
  return async (dispatch) => {
    
    try {
      const response = await fetch(`${URL}/lostfounds`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      await dispatch(addLostRecord(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const fetchLostRecords = (obj) => {
  return {
    type: FETCH_LOST_RECORDS,
    payload: obj,
  };
};

const addLostRecord = (record) => {
  return {
    type: ADD_LOST_RECORD,
    payload: record,
  };
};
