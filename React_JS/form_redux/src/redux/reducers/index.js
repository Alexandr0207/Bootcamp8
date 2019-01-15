import { combineReducers } from 'redux';
import text from './textReducers';
import tasks from './tasksReducers';
// import task from './textReducers';


const rootReducer = combineReducers({
  text,
  tasks,
  // task,
})

export default rootReducer;