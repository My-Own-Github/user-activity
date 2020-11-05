import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { RootReducer } from './root-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(ReduxThunk, logger);
export const store = createStore(RootReducer, composeEnhancers(middleware));