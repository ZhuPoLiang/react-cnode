'use strict';

import './index.styl';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Loading from '../Loading';
import Main from '../../routers/main';

import { signInList, signOutList, subNavList } from '../../routers/list';

const App = (props) => {
    const navList = !props.login.isLogged ? signOutList : signInList;

    return (
        <Router >
            <div className='global-component'>
                <NavBar navList={navList} />
                <main id='main'>
                    <Sidebar />
                    <Main />
                </main>
                <Footer />
                {
                    props.loading.isLoading ? <Loading message={props.loading.text} /> : ''
                }
            </div>
        </Router>
    )
}

export default App;
