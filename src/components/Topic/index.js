'use strict';

import './index.styl';

import React from 'react';

import Reply from './Reply';

const tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};

const Topic = (props) => {
    const {content, title, reply_count, top, replies, author, tab, visit_count} = props.data;

    return (
        <div>
            <div className='panel'>
                <div className='inner'>
                    <div className='header topic-header'>
                        <div className='topic-title'>
                            {
                                top ? (
                                    <span className="tab put-top">置顶</span>
                                ) : null
                            }
                            {title}
                        </div>
                        <div className="changes">
                            <span>发布于 9 个月前</span>
                            <span>作者 <a href="/user/i5ting">{author.loginname}</a></span>
                            <span>{visit_count} 次浏览</span>
                            <span> 来自 {tabSchema[tab]}</span>
                        </div>
                    </div>
                    <div className='topic-content' dangerouslySetInnerHTML={{ __html: content}}></div>
                </div>
            </div>
            {
                reply_count !== 0 ? <Reply {...props}/> : null
            }
        </div>
    );
}

export default Topic;
