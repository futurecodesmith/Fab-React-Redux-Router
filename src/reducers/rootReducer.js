import shelf from './shelfReducer';
import login from './loginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shelf, 
  login
});

export default rootReducer;