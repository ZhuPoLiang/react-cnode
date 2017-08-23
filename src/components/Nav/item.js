'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <li>
            <Link
                to={props.path}
            >
            {props.title}
            </Link>
        </li>
    )
}
