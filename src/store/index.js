'use strict';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const rootStore = createStore(
    combineReducers({
		...reducers,
		routing: routerReducer
	}),
	compose(applyMiddleware(
		routerMiddleware(createBrowserHistory()),
		thunk
	))
);

export default rootStore;
