'use strict';

import './index.styl';

import React from 'react';

const Sidebar = (props) => {
    console.log(props);
    const {author, } = props;

    return (
        <div id='sidebar'>
            <div className='panel'>
                <div className='header'>作者</div>
                <div className='inner'>
                    <div className='user_card'>
                        <a className="user_avatar" href={'/user'+ author.loginname}>
                          <img src={author.avatar_url} title={author.loginname} />
                        </a>
                        <span className="user_name"><a className="dark" href={'/user'+ author.loginname}>{author.loginname}</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
