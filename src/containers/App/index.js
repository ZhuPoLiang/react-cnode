'use strict';

import React from 'react';
import {Route} from 'react-router-dom';

import NavBar from '../NavBar';
import Main from '../Main';
import Footer from '../Footer';

export default class App extends React.Component {
    render() {
        return (
            <div className='global-component'>
        		<NavBar />
                <Main />
                <Footer />
        	</div>

        )
    }
};
