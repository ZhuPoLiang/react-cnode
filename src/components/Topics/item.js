'use strict'

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { compareDate } from '../../util/util';

const Item = (props) => {
    let {author:{loginname, avatar_url}, create_at, top, tabName, id, title, reply_count, visit_count} = props;

    return (
        <li className='cell'>
            <Link
                to={'/user/'+ loginname}
                className='picture'
            >
                <img src={avatar_url} title={loginname} />
            </Link>
            <div className='browse'>
                <span className='reply-count'>{reply_count}</span>/<span className='visit-count'>{visit_count}</span>
            </div>
            <div className='create-timer'>
                <span className='time'>发表于：{compareDate(create_at)}</span>
            </div>
            <div className='title'>
                {
                    top ? (
                        <span className='tab put-top'>置顶</span>
                    ) : (
                        <span className='tab'>{tabName}</span>
                    )
                }
                <Link
                    to={'/topic/'+ id}
                    className='link'
                >
                    {title}
                </Link>
            </div>
        </li>
    )
}

Item.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string
};

export default Item;
