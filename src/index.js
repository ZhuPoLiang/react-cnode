'use strict';

import './common/styles/normalize';
import './common/styles/icon';
import './common/styles/index';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer, syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

import App from './containers/App';

const store = createStore(
	combineReducers({
		routing: routerReducer
	}),
	applyMiddleware(routerMiddleware(createBrowserHistory()))
);

const history = syncHistoryWithStore(createBrowserHistory(), store);

history.listen(location => { console.log(location) })

let oApp = document.getElementById('app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	oApp
);
