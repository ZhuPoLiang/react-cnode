'use strict'

import './index.styl';
import user_picture from '../../common/images/1.jpg';

import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import { subNavList } from '../../routers/list';

const Topics = (props) => {
    return (
        <div className='panel'>
            <div className='header'>
                {
                    subNavList.map((item, index) => {
                        return (
                            <NavLink
                                exact
                                to={item.path}
                                key={index}
                                className='topic-tab'
                            >
                            {item.title}
                            </NavLink>
                        )
                    })
                }
            </div>
            <div className='inner'>
                <ul className='topic-list'>
                    <li className='cell'>
                        <a className='picture'>
                            <img src={user_picture} />
                        </a>
                        <div className='browse'>
                            <span>100</span>/<span>3000</span>
                        </div>
                        <a href='#' className='last-timer'>
                            <img src={user_picture} />
                            <span className='time'>2017-08-01</span>
                        </a>
                        <div className='title'>
                            <span className='tab put-top'>置顶</span>
                            <a href='#' className='link'>
                                又可以开心的做自己的事情了，没有比这更能感到舒服自在的
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Topics;
