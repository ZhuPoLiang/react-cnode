'use strict';

import './index.styl';

import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Reply from './Reply';

const Topic = (props) => {
    let {loginname, avatar_url, score, recent_topics, recent_replies} = props.data;
    // <ul className="breadcrumb">
    //     <li>
    //         <Link
    //             to='/'
    //         >
    //             主页
    //         </Link>
    //         <span className='divider'>/</span>
    //     </li>
    // </ul>
    return (
        <main id='main'>
            <Sidebar {...props.data}/>
            <div id='content'>
                <div className='panel'>
                    <div className='header'>作者信息</div>
                    <div className="inner userinfo">
                        <div className="user_big_avatar">
                            <img src={avatar_url} className="user_avatar" title={loginname} />
                        </div>
                        <a className="dark">{loginname}</a>
                        <div className="user_profile">
                            <ul className="unstyled">
                                <li>
                                    <span className="big">{score}</span> 积分
                                </li>
                                <li>
                                    <i className="iconfont icon-github"></i>
                                    <a className="dark" href="https://github.com/JacksonTian" target="_blank">@JacksonTian</a>
                                </li>
                            </ul>
                        </div>
                        <p className="col_fade">注册时间 7 年前</p>
                    </div>
                </div>
                <Reply panel_name="最近创建的话题" data={recent_topics}/>
                <Reply panel_name="最近参与的话题" data={recent_replies}/>
            </div>
        </main>
    );
}

export default Topic;
