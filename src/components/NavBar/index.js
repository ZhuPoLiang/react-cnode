'use strict';

import './index.styl';

import React from 'react';
import PropTypes from 'prop-types';

import Logo from './Logo';
import Nav from './Nav';

const NavBar = (props) => {
    return (
        <nav id='nav-bar'>
            <div className='inner'>
                <Logo />
                <Nav topMenu={props.topMenu}/>
            </div>
        </nav>
    );
}

Nav.propTypes = {
    navList: PropTypes.array
};

export default NavBar;
