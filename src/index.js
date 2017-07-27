'use strict';

import './common/styles/icon';
import './common/styles/index';

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import SayHello from './components/SayHello';

let oApp = document.getElementById('app');

ReactDOM.render(
	<SayHello />,
	oApp
);
