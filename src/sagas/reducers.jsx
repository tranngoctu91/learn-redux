import { combineReducers } from "redux";
import { newsReducer } from "./news/newSlice";

export const reducer = combineReducers({
  news: newsReducer,
});
