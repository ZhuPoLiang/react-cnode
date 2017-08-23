'use strict';

import './index.styl';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';

import NavBar from '../NavBar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Loading from '../Loading';

import { signInList, signOutList, subNavList } from '../../routers';
import Topics from '../Topics';
import Topic from '../Topic';
import NotFound from '../NotFound';



const App = (props) => {
    const navList = !props.isLogged ? signOutList : signInList;

    return (
        <div className='global-component'>
            <NavBar navList={navList} />
            <main id='main'>
                <Sidebar />
                <div id='content'>
                    <Switch>
                        <Route path='/' exact component={Topics} />
                        <Route path='/all' component={Topics} />
                        <Route path='/good' component={Topics} />
                        <Route path='/share' component={Topics} />
                        <Route path='/ask' component={Topics} />
                        <Route path='/job' component={Topics} />
                        <Route path='/dev' component={Topics} />
                        <Route path='/login' component={NotFound} />
                        <Route path='/my/messages' component={NotFound} />
                        <Route path='/404' component={NotFound} />
                        <Route path='/topic/:id' component={Topic} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App;
