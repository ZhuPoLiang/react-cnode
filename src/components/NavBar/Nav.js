'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

const Nav = (props) => {
    let linkItems = props.navList.map((item, index) => {
        return <Item key={index} {...item} />
    });

    return (
        <ul className='nav float-right'>
            { linkItems }
        </ul>
    );
};

Nav.propTypes = {
    navList: PropTypes.array
};

export default Nav;
