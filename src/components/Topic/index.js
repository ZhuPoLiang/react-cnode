'use strict';

import './index.styl';

import React from 'react';
import { Link } from 'react-router-dom';

import { changeTabSchema, compareDate } from '../../util/util';
import Sidebar from './Sidebar';
import Reply from './Reply';

const Topic = (props) => {
    const {content, title, create_at, reply_count, top, replies, author:{loginname}, tab, visit_count} = props.data;

    return (
        <main id='main'>
            <Sidebar {...props.data}/>
            <div id='content'>
                <div className='panel'>
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
                            <span>发布于 {compareDate(create_at)} 个月前</span>
                            <span>作者 <Link to={'/user/'+ loginname}>{loginname}</Link></span>
                            <span>{visit_count} 次浏览</span>
                            <span> 来自 {changeTabSchema(tab)}</span>
                        </div>
                    </div>
                    <div className='inner no-padding'>
                        <div className='topic-content' dangerouslySetInnerHTML={{ __html: content}}></div>
                    </div>
                </div>
                {
                    reply_count !== 0 ? <Reply {...props}/> : null
                }
            </div>
        </main>
    );
}

export default Topic;
