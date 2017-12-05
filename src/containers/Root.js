'use strict';

import React from 'react';
import { Provider } from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import configStore from '../store/configStore';

import App from './App';

const initState = {
    loading: {
        text: '正在加载ing...',
        isLoading: false
    },
    login: {
        isLogged: false
    }
};

const store = configStore(initState);
	// history = syncHistoryWithStore(createBrowserHistory(), store);

const Root = () => {
    return (
        <Provider store={store}>
            <App />
    	</Provider>
    );
};

Root.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
};

export default Root;
