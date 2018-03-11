'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import logoSvg from './cnodejs_light.svg';

export default () => {
    return (
        <Link
            to='/'
            className='logo'
        >
            <img src={logoSvg} />
        </Link>
    );
};
