'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import configStore from '../store/configStore';

import Home from './Home';

const store = configStore(),
    history = syncHistoryWithStore(createBrowserHistory(), store);

const App = () => {
    return (
        <Provider store={store}>
            <Home />
    	</Provider>
    )
};

App.propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
};

export default App;
