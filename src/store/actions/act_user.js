import { ADD_NEW_USER, CHANGE_AUTH } from "../typesList";

export const doSignIn = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://propets.telran-edu.de:8080/api/v1/auth/signin",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const json = await response.json();
      await localStorage.setItem("token", json.accessToken);
      await localStorage.setItem("userId", json.id);
      console.log(json);

      await dispatch(changeAuth(true));
    } catch (err) {
      console.log(err.message);
    }
  };
};
const changeAuth = (authMode) => {
  return {
    type: CHANGE_AUTH,
    payload: authMode,
  };
};

export const addNewUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://propets.telran-edu.de:8080/api/v1/auth/signup",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
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
      console.log("signout");
      await dispatch(changeAuth(false));
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
