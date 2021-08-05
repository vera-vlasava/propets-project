import { FETCH_POSTS, ADD_POST, CHANGE_ADD_POST, FETCH_POST_BY_ID, ADD_COMMENT, EDIT_POST } from "../typesList";

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
      return { ...state, comments: { ...state.comments, list: [...state.comments.list, action.payload] } };

    case EDIT_POST:
      idx = state.list.findIndex((p) => p.id === action.payload.id);
      //idx = state.postById.id;

      if (idx === -1) return state;
      _arr = [...state.list];
      //_arr = [...state.postById];
      _arr.splice(idx, 1, action.payload);
      //_arr[0].like = state.postById.like + 1;
      console.log(_arr)
      return {
        ...state,
        list: _arr,
      };
    //return { ...state, postById: _arr };

    default:
      return state;
  }
};
