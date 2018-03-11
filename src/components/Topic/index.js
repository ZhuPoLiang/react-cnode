'use strict';

import './index.styl';

import React from 'react';

const Topic = (props) => {
    const {content, title, top, reply_count, replies} = props.data;

    return (
        <div>
            <div className='panel'>
                <div className='inner'>
                    <div className='header topic-header'>
                        <div className='topic-title'>
                            {
                                top ? (<span className="tab put-top">置顶</span>) : null
                            }
                            {title}
                        </div>
                        <div className="changes">
                            <span>发布于 9 个月前</span>
                            <span>作者 <a href="/user/i5ting">i5ting</a></span>
                            <span>43068 次浏览</span>
                            <span> 来自 分享</span>
                        </div>
                    </div>
                    <div className='topic-content' dangerouslySetInnerHTML={{ __html: content}}></div>
                </div>
            </div>
            <div className='panel'>
                <div className='inner'>
                    <div className='header'>
                        {reply_count} 回复
                    </div>
                    <ul class="topic-list">
                        {
                            replies.map(item => {
                                return (
                                    <li className='cell'>
                                        <div className='reply_content' dangerouslySetInnerHTML={{ __html: item.content}}></div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='topic-content' dangerouslySetInnerHTML={{ __html: content}}></div>
                </div>
            </div>
        </div>
    );
}

export default Topic;
