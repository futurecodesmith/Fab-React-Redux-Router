import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import State from './state';

import Store from './store';
import { Provider } from 'react-redux';





const storeInstance = Store(State);

ReactDOM.render(
<Provider store={storeInstance}>
  <App /> 
</Provider>, 
document.getElementById('root'));

registerServiceWorker();
