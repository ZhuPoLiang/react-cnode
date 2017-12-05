'use strict';

import React from 'react';

import logoSvg from './cnodejs_light.svg';

export default () => {
    return (
        <a className='logo'>
            <img src={logoSvg} />
        </a>
    );
};
