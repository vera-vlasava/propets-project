import { FETCH_POSTS, ADD_POST, FETCH_POST_BY_ID, EDIT_POST } from "../typesList";
import { URL } from "../utilites";

export const getPosts = () => {

  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}/posts`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
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

export const getPostById = (postId) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL}/posts/${postId}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status !== 200) {
        return
      }
      const data = await response.json();
      console.log("id");
      console.log(data);
      await dispatch(fetchPostById(data));
    } catch (err) {
      console.log(err.message);
    }
  }
}
const fetchPostById = (post) => {
  return {
    type: FETCH_POST_BY_ID,
    payload: post,
  }
}

const addNewPostToState = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};
export const addLikeToPost = (id) => {
  return async (dispatch, getState) => {
    const post = getState().posts.list.find((post) => post.id === id);
    //const post = getState().posts.postById;

    try {
      const response = await fetch(`${URL}/posts/${post.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": localStorage.token
        },
        body: JSON.stringify({ like: post.like + 1 })

      });
      if (response.status !== 200) {
        return
      }

      const data = await response.json();
      await dispatch(changePostInState(data))
    } catch (err) {
      console.log(err.message);
    }
  }
}
const changePostInState = (post) => {
  return { type: EDIT_POST, payload: post }
}
