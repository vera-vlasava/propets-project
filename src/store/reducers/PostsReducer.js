import {
  FETCH_POSTS,
  ADD_POST,
  CHANGE_ADD_POST,
  FETCH_POST_BY_ID,
  ADD_COMMENT,
  EDIT_POST,
} from "../typesList";

export const PostsReducer = (state = {}, action) => {
  let idx, _arr;

  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ...action.payload };

    case FETCH_POST_BY_ID:
      return { ...state, postById: action.payload };

    case ADD_POST:
      return { ...state, list: [...state.list, action.payload] };

    case CHANGE_ADD_POST:
      return { ...state, addPostMode: !state.addPostMode };

    case ADD_COMMENT:
      return {
        ...state,
        postById: {
          ...state.postById,
          Comments: [...state.postById.Comments, action.payload],
        },
      };

    case EDIT_POST:
      return {
        ...state,
        postById: action.payload,
      };

    default:
      return state;
  }
};
