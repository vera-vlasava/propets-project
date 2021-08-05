import { FETCH_POSTS, ADD_POST, FETCH_POST_BY_ID } from "../typesList";
import { URL } from "../utilites";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://propets.telran-edu.de:8080/api/v1/posts",
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      await dispatch(fetchPosts({ list: data }));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const addNewPost = (newPost) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token,
        },
        body: JSON.stringify(newPost),
      });
      const json = await response.json();
      await dispatch(addNewPostToState(json));
    } catch (err) {
      console.log(err.message);
    }
  };
};

const fetchPosts = (obj) => {
  return {
    type: FETCH_POSTS,
    payload: obj,
  };
};

const addNewPostToState = (post) => {
  return {
    type: ADD_POST,
    payload: post, 
  };
};
