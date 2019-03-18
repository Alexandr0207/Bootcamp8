import { combineReducers } from 'redux';
import input from './inputReducer';
import counter from './CounterReducer';

const rootReducer = combineReducers({
  input,
  counter
})

export default rootReducer;