import shelf from './shelfReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shelf, 
});

export default rootReducer;