'use strict';

import './index.styl';

import React from 'react';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';

import routers from '../../routers';

export default class NavBar extends React.Component {
    static defaultProps = {
        navList: routers
    }

    render() {
        return (
            <nav id='nav-bar'>
                <div className='inner'>
                    <Logo />
                    <Nav navList={this.props.navList} />
                </div>
            </nav>
        )
    }
};
