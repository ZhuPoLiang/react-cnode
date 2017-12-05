'use strict';

import './common/styles/normalize';
import './common/styles/icon';
import './common/styles/index';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './containers/Root';

let oApp = document.getElementById('app');

ReactDOM.render(
	<Root />,
	oApp
);
