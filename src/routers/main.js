'use strict';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import User from '../containers/User';
import Topic from '../containers/Topic';
import Topics from '../containers/Topics';
import NotFound from '../components/NotFound';
import Signin from '../components/Signin';

const MainComponent = () => {
    return (
        <Switch>
            <Route path='/' exact render={() => (
                <Redirect to='/all'/>
            )}/>
            <Route path='/all' component={Topics} />
            <Route path='/good' component={Topics} />
            <Route path='/share' component={Topics} />
            <Route path='/ask' component={Topics} />
            <Route path='/job' component={Topics} />
            <Route path='/dev' component={Topics} />
            <Route path='/signin' component={Signin} />
            <Route path='/user/:id' component={User} />
            <Route path='/404' component={NotFound} />
            <Route path='/topic/:id' component={Topic} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default MainComponent;
