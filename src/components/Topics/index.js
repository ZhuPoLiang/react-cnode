'use strict'

import './index.styl';

import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import { subNavList } from '../../routers';
import NotFound from '../NotFound';

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
                        <a className='picture'>1</a>
                        <a className='timer'>2</a>
                        <div className='title'>
                            3
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Topics;
