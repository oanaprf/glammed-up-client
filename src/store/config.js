import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { fetch, auth } from './middlewares';
import { modal } from './modules';

const reducer = combineReducers({
  api: fetch.reducer,
  auth: auth.reducer,
  modal: modal.reducer,
});
const middleware = [
  thunk,
  ...(process.env.NODE_ENV === 'development' ? [logger] : []),
  fetch.middleware,
  auth.middleware,
];

export default createStore(reducer, applyMiddleware(...middleware));
