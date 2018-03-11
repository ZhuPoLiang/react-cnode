'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Nav = (props) => {
    let topMenuItems = props.topMenu.map((item, index) => {
        return <Item key={item.path} {...item} />
    });

    return (
        <ul className='nav float-right'>
            { topMenuItems }
        </ul>
    );
};

Nav.propTypes = {
    navList: PropTypes.array
};

export default Nav;
