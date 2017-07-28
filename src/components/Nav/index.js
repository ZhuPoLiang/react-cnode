'use strict';

import React from 'react';

import LinkItem from './LinkItem';

export default class Nav extends React.Component {
    render() {
        let linkItems = this.props.navList.map((item, index) => {
            return <LinkItem key={index} {...item} />
        });

        return (
            <ul className='nav float-right'>
                { linkItems }
            </ul>
        );
    }
};
