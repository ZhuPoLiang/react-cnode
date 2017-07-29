'use strict';

import React from 'react';

import Item from './item';

export default class Nav extends React.Component {
    render() {
        let linkItems = this.props.navList.filter(item => {
            return item.isNavLink;
        }).map((item, index) => {
            return <Item key={index} {...item} />
        });

        return (
            <ul className='nav float-right'>
                { linkItems }
            </ul>
        );
    }
};
