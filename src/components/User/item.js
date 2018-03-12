'use strict'

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { compareDate } from '../../util/util';

const Item = (props) => {
    let {author:{loginname, avatar_url}, id, title, last_reply_at} = props;

    return (
        <li className='cell'>
            <Link
                to={'/user/'+ loginname}
                className='picture'
            >
                <img src={avatar_url} title={loginname} />
            </Link>
            <div className='create-timer'>
                <span className='time'>最后回复：{compareDate(last_reply_at)}</span>
            </div>
            <div className='title'>
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
