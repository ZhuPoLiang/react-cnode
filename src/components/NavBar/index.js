'use strict';

import './index.styl';

import React from 'react';

import Logo from '../Logo';
import Nav from '../Nav';

const NavBar = (props) => {
    return (
        <nav id='nav-bar'>
            <div className='inner'>
                <Logo />
                <Nav navList={props.navList} />
            </div>
        </nav>
    );
}

export default NavBar;
