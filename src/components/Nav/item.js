'use strict';

import React from 'react';
import {NavLink} from 'react-router-dom';

export default (props) => {
    return (
        <li>
            <NavLink
                exact
                to={props.path}
            >
            {props.title}
            </NavLink>
        </li>
    )
}
