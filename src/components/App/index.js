'use strict';

import './index.styl';

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Loading from '../../components/Loading';

import routers from '../../routers';
import NotFound from '../../components/NotFound';

export default class App extends React.Component {
    render() {
        return (
            <div className='global-component'>
                <NavBar />
                <main id='main'>
                    <Switch>
                        {
                            routers.map((route, index) => {
                                return (
                                    <Route
                                        exact
                                        key={index}
                                        path={route.path}
                                        list={list}
                                        component={route.component}
                                    />
                                )
                            })
                        }
                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>
                <Footer />
        	</div>
        )
    }
};
