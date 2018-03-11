'use strict'

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <li className='cell'>
            <a className='picture'>
                <img src={props.author.avatar_url} title={props.author.loginname} />
            </a>
            <div className='browse'>
                <span className='reply-count'>{props.reply_count}</span>/<span className='visit-count'>{props.visit_count}</span>
            </div>
            <div className='create-timer'>
                <span className='time'>发表于：2017-08-01</span>
            </div>
            <div className='title'>
                {
                    props.top ? (
                        <span className='tab put-top'>置顶</span>
                    ) : (
                        <span className='tab'>{props.tabName}</span>
                    )
                }
                <Link
                    to={'/topic/'+ props.id}
                    className='link'
                >
                    {props.title}
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
