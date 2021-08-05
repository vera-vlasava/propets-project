import { ADD_COMMENT } from "../typesList";
import { URL } from "../utilites";

export const addComment = (comment) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}/comments`, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": localStorage.token
                },
                body: JSON.stringify(comment)


            });
            if (response.status !== 200) {
                return
            }
            const data = await response.json();
            await dispatch(addCommentInState(data));
            console.log(data)
        } catch (err) {
            console.log(err.message);
        }
    };
};
const addCommentInState = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment,
    };
};