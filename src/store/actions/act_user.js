import {
  ADD_NEW_USER,
  CHANGE_AUTH,
  EDIT_USER,
  GET_USER_BY_ID,
} from "../typesList";

import { URL } from "../utilites";

export const doSignIn = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/auth/signin`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const json = await response.json();
      await localStorage.setItem("token", json.accessToken);
      await localStorage.setItem("userId", json.id);

      await dispatch(changeAuth(true));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addNewUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/auth/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      await dispatch(addUser(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const doSignOut = () => {
  return async (dispatch) => {
    try {
      await localStorage.removeItem("token");
      await localStorage.removeItem("userId");
      await dispatch(changeAuth(false));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/users/${userId}`, {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
      });
      const data = await response.json();
      await dispatch(setUserById(data));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const updateUser = (userInfo) => {
  const id = +localStorage.userId;
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
        body: JSON.stringify(userInfo),
      });
      const json = await response.json();
      await dispatch(editUser(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const addUser = (user) => {
  return {
    type: ADD_NEW_USER,
    payload: user,
  };
};

const changeAuth = (authMode) => {
  return {
    type: CHANGE_AUTH,
    payload: authMode,
  };
};

const setUserById = (user) => {
  return {
    type: GET_USER_BY_ID,
    payload: user,
  };
};

const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};
