'use strict';

import './index.styl';

import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import { subMenu } from '../../routers/list';
import Item from './item';

const tabSchema = {
    all: '全部',
    good: '精华',
    share: '分享',
    ask: '问答',
    job: '招聘',
    dev: '测试',
};

const Topics = (props) => {
    var topicMenu = props.data.filter(item => {
        return !!item.tab;
    }).map(item => {
        return <Item key={item.id} tabName={tabSchema[item.tab]} {...item}/>
    });

    return (
        <div className='panel'>
            <div className='header'>
                {
                    subMenu.map((item, index) => {
                        return (
                            <NavLink
                                exact
                                to={item.path}
                                key={item.path}
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
                    { topicMenu }
                </ul>
            </div>
        </div>
    );
}

export default Topics;
