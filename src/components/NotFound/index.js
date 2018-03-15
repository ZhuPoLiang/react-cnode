'use strict';

import './index.styl';

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main id='main'>
            <div className='error-panel'>
                <h1>Error 404</h1>
                <Link to='/'>返回首页</Link>
            </div>
        </main>
    );
}

export default NotFound;
