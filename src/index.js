'use strict';

import './common/styles/normalize';
import './common/styles/icon';
import './common/styles/index';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { routerReducer, syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

import App from './containers/App';
import reducers from './reducers';

const store = createStore(
	combineReducers({
		...reducers,
		routing: routerReducer
	}),
	compose(applyMiddleware(
		routerMiddleware(createBrowserHistory()),
		Thunk
	))
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

let oApp = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	oApp
);
