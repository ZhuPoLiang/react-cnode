'use strict';

import React from 'react';
import { Link } from 'react-router-dom';

import { compareDate } from '../../util/util';

const Reply = (props) => {
    const {reply_count, replies} = props.data;

    return (
        <div className='panel'>
            <div className='header'>
                {reply_count} 回复
            </div>
            <div className='inner no-padding'>
                <ul className="topic-list reply-list">
                    {
                        replies.map((item, index) => {
                            const {id, ups, create_at, content, author: {avatar_url, loginname}} = item,
                                upsLen = ups.length;

                            return (
                                <li key={id} className='cell'>
                                    <div className='author_content'>
                                        <Link
                                            to={'/user/'+ loginname}
                                            className='user_avatar'
                                        >
                                            <img src={avatar_url} title={loginname} />
                                        </Link>
                                        <div className='user_info'>
                                            <span className='reply_author'>
                                                <Link
                                                    to={'/user/'+ loginname}
                                                    className='user_avatar'
                                                >
                                                    {loginname}
                                                </Link>
                                            </span>
                                            <span className='reply_time'>
                                                {index + 1}楼·{compareDate(create_at)}
                                            </span>
                                        </div>
                                        <div className='user_action'>
                                            {
                                                upsLen ? ('赞 ' + upsLen) : null
                                            }
                                        </div>
                                    </div>
                                    <div className='reply_content' dangerouslySetInnerHTML={{ __html: content}}></div>
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
