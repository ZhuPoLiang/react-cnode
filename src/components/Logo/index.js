'use strict';

import React from 'react';

import logoSvg from '../../common/images/cnodejs_light.svg';

const Logo = () => {
    return (
        <a className='logo'>
            <img src={logoSvg} />
        </a>
    );
}

export default Logo;
