'use strict';

import './common/styles/normalize';
import './common/styles/icon';
import './common/styles/index';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

import App from './components/App';
import store from './store';

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
