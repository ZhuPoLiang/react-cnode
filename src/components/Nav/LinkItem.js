'use strict';

import React from 'react';
import {NavLink} from 'react-router-dom';

export default class LinkItem extends React.Component {
    render() {
        return (
            <li>
                <NavLink
                    activeClassName='active'
                    to={'/' + this.props.tab}
                >
                {this.props.title}
                </NavLink>
            </li>
        )
    }
}
