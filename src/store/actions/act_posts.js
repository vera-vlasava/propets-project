import { FETCH_POSTS, ADD_POST, FETCH_POST_BY_ID } from "../typesList";
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