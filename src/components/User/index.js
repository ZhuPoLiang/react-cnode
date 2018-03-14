'use strict';

import './index.styl';

import React from 'react';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Reply from './Reply';

const Topic = (props) => {
    let {loginname, avatar_url, score, recent_topics, recent_replies} = props.data;

    return (
        <main id='main'>
            <Sidebar {...props.data}/>
            <div id='content'>
                <Reply panel_name="创建" data={recent_topics}/>
                <Reply panel_name="参与" data={recent_replies}/>
            </div>
        </main>
    );
}

export default Topic;
