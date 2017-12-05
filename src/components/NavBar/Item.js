'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <li>
            <Link
                to={props.path}
            >
            {props.title}
            </Link>
        </li>
    );
};

Item.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string
};

export default Item;
