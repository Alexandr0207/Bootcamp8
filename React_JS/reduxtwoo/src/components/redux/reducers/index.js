import { combineReducers } from 'redux';
import input from './inputReducer';
import fetchData from './FetchDataReducer';
import loading from './LoadingReducer';

const rootReducer = combineReducers({
  input,
  data: fetchData,
  loading,
})

export default rootReducer;