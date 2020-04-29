import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { fetch } from './middlewares';

const reducer = combineReducers({ api: fetch.reducer });
const middleware = [thunk, fetch.middleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export default createStore(reducer, applyMiddleware(...middleware));
