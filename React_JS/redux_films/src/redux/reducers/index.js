import { combineReducers } from 'redux';
import films from './filmsReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  films,
  form: formReducer,
})

export default rootReducer;