'use strict';

import './index.styl';

import React from 'react';
import { Link } from 'react-router-dom';

import { compareDate } from '../../util/util';

const Sidebar = (props) => {
    let {avatar_url, loginname, score, create_at} = props;

    return (
        <div id='sidebar'>
            <div className='panel'>
                <div className='header'>作者信息</div>
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
                    <div className="user_profile">
                        <ul className="unstyled">
                            <li>
                                <span className="big">{score}</span> 积分
                            </li>
                        </ul>
                    </div>
                    <p className="col_fade">注册时间 {compareDate(create_at)}</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
