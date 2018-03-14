'use strict';

import './index.styl';

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    const {author: {avatar_url, loginname}} = props;

    return (
        <div id='sidebar'>
            <div className='panel'>
                <div className='header'>作者</div>
                <div className='inner'>
                    <div className='user_card'>
                        <Link
                            to={'/user/'+ loginname}
                            className="user_avatar"
                        >
                            <img src={avatar_url} title={loginname} />
                        </Link>
                        <span className="user_name">
                            <Link
                                to={'/user/'+ loginname}
                                className="dark"
                            >
                                {loginname}
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
