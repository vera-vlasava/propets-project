import { combineReducers } from "redux";
import { ArticlesReducer } from "./ArticlesReducer";
import { UsersReducer } from "./UsersReducer";
import { LostRecordsReducer } from "./LostRecordsReducer";
import { FoundRecordsReducer } from "./FoundRecordsReducer";
import { PostsReducer } from "./PostsReducer";

const RootReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  articles: ArticlesReducer,
  lostRecords: LostRecordsReducer,
  foundRecords: FoundRecordsReducer,
});

export default RootReducer;
