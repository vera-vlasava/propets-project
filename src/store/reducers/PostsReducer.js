import { FETCH_POSTS, ADD_POST, CHANGE_ADD_POST, FETCH_POST_BY_ID, ADD_COMMENT } from "../typesList";

export const PostsReducer = (state = {}, action) => {
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
      return { ...state, comments: { ...state.comments, list: [...state.comments.list, action.payload] } };

    default:
      return state;
  }
};
