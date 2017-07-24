import shelf from './shelfReducer';
import login from './loginReducer';
import { imageFetchError, imagesLoading, images } from './imageReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shelf, 
  login, 
  images,
  imageFetchError,
  imagesLoading,
});

export default rootReducer;