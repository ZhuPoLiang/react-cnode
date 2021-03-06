'use strict';

import React from 'react';
import { Link } from 'react-router-dom'

// import Item from './Item';

const Nav = (props) => {
    // let topMenuItems = props.topMenu.map((item, index) => {
    //     return <Item key={item.path} {...item} />
    // });
    // { topMenuItems }

    return (
        <ul className='nav float-right'>
            <li>
                <Link to='/'>首页</Link>
            </li>
            <li>
                <a href="https://cnodejs.org/signup" target="_blank">注册</a>
            </li>
            <li>
                <a href="https://cnodejs.org/signin" target="_blank">登陆</a>
            </li>
        </ul>
    );
};

export default Nav;
