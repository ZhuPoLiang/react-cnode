'use strict';

import './index.styl';

import React from 'react';

import NavBar from '../NavBar';

const Header = (props) => {
    return (
        <header id='header'>
            <NavBar {...props}/>
        </header>
    )
}

export default Header;
