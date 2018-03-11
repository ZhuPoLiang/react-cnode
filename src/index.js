'use strict';

// 引入全局样式
import './common/styles/normalize';
import './common/styles/icon';
import './common/styles/index';

// 引入兼容包
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// 引入app容器组件
import App from './containers/App';

let oApp = document.getElementById('app');

ReactDOM.render(
	<App />,
	oApp
);
