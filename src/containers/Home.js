'use strict';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HomeComponent from '../components/Home';
import * as topicActions from '../components/Topics/actions';

const Home = (props) => {
    return (
        <Router>
            <HomeComponent {...props}/>
        </Router>
    )
};

const mapStateToProps = (state) => state;

export default connect(
    mapStateToProps
)(Home);