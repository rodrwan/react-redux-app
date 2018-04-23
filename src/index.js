import React from 'react';
import ReactDOM from 'react-dom';

// Redux
// yarn add redux redux-thunk redux-logger redux-devtools-extension react-redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducers from './rootReducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk, logger];
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
