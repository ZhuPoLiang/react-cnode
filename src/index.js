'use strict';

import './common/styles/normalize';
import './common/styles/icon';
import './common/styles/index';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, browserHistory} from 'react-router-dom';

import App from './containers/App';

let oApp = document.getElementById('app');

ReactDOM.render(
	<Router histiry={browserHistory}>
		<App />
	</Router>,
	oApp
);
