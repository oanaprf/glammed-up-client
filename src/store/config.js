/* eslint-disable no-undef */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { fetch, auth } from './middlewares';
import { modal, preferences } from './modules';

const logger = createLogger({
  collapsed: true,
});

const reducer = combineReducers({
  api: fetch.reducer,
  auth: auth.reducer,
  modal: modal.reducer,
  preferences: preferences.reducer,
});

const middleware = [
  thunk,
  ...(process.env.NODE_ENV === 'development' ? [logger] : []),
  fetch.middleware,
  auth.middleware,
];

export default createStore(
  reducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
