import { combineReducers } from 'redux';
import input from './inputReducer';
import fetchData from './FetchDataReducer';

const rootReducer = combineReducers({
  input,
  data: fetchData,
})

export default rootReducer;