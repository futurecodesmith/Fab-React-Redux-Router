import cart from './cartReducer';
import shelf from './shelfReducer';
import topThree from './topThreeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart, 
  shelf, 
  topThree
});

export default rootReducer;