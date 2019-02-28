import { combineReducers } from "redux";
import tokenReduce from './tokenReduce';
import errReduce from "./errReduce";
import postReduce from "./postReduce";
import yardReduce from "./yardReduce";

export default combineReducers({
  auth: tokenReduce,
  errors: errReduce,
  post: postReduce,
  yards: yardReduce
});