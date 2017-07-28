'use strict';

import './index.styl';

import React from 'react';
import {Route} from 'react-router-dom';

import Article from '../../components/Article';

export default class Main extends React.Component {
    render() {
        return (
            <main id='main'>
                <Route exact path='/' component={Article} />
                <Route path='/all' component={Article} />
                <Route path='/good' component={Article} />
                <Route path='/share' component={Article} />
                <Route path='/ask' component={Article} />
                <Route path='/job' component={Article} />
                <Route path='/dev' component={Article} />
            </main>
        )
    }
};
