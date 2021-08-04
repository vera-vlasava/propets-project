import { FETCH_FOUND_RECORDS, ADD_FOUND_RECORD } from "../typesList";
import { URL } from "../utilites";

export const getFoundRecords = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/lostfounds/found`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      await dispatch(fetchFoundRecords({ list: data }));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addNewFound = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/lostfounds`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "x-api-key": localStorage.token,
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      await dispatch(addFoundRecord(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const addFoundRecord = (record) => {
  return {
    type: ADD_FOUND_RECORD,
    payload: record,
  };
};

const fetchFoundRecords = (obj) => {
  return {
    type: FETCH_FOUND_RECORDS,
    payload: obj,
  };
};