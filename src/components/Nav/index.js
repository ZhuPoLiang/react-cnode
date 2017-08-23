'use strict';

import React from 'react';

import Item from './item';

const Nav = (props) => {
    let linkItems = props.navList.map((item, index) => {
        return <Item key={index} {...item} />
    });

    return (
        <ul className='nav float-right'>
            { linkItems }
        </ul>
    );
}

export default Nav;
