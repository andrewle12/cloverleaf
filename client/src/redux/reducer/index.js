import { combineReducers } from 'redux';
import tokenReduce from './tokenReduce';
import errReduce from './errReduce';

export default combineReducers({
  auth: tokenReduce,
  errors: errReduce
});