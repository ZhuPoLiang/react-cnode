'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import configStore from '../store/configStore';

import Home from './Home';

const store = configStore();

const App = () => {
    return (
        <Provider store={store}>
            <Home />
    	</Provider>
    )
};

App.propTypes = {
    store: PropTypes.object
};

export default App;
