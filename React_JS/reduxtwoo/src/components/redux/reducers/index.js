import { combineReducers } from 'redux';
import input from './inputReducer';
import fetchData from './FetchDataReducer';
// import loading from './FetchDataReducer';

const rootReducer = combineReducers({
  input,
  data: fetchData,
  // loading,
})

export default rootReducer;