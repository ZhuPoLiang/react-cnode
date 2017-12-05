'use strict';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Topics from '../components/Topic/Topics';
import Topic from '../components/Topic/Topic';
import NotFound from '../components/NotFound';

const Main = () => {
    return (
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
    );
}

export default Main;
