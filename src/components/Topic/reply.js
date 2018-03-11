'use strict';

import React from 'react';

const Reply = (props) => {
    var {reply_count, replies, author} = props.data

    return (
        <div className='panel'>
            <div className='inner no-padding'>
                <div className='header'>
                    {reply_count} 回复
                </div>
                <ul className="topic-list reply-list">
                    {
                        replies.map((item, index) => {
                            return (
                                <li key={item.id} className='cell'>
                                    <div className='author_content'>
                                        <a className='user_avatar'>
                                            <img src={item.author.avatar_url} title={item.author.loginname} />
                                        </a>
                                        <div className='user_info'>
                                            <span className='reply_author'>{item.author.loginname}</span>
                                            <span className='reply_time'>
                                                {index + 1}楼
                                            </span>
                                        </div>
                                    </div>
                                    <div className='reply_content' dangerouslySetInnerHTML={{ __html: item.content}}></div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default Reply;
