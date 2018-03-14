'use strict';

import './index.styl';

import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import { changeTabSchema } from '../../util/util';
import { subMenu } from '../../routers/list';
import Sidebar from './Sidebar';
import Item from './item';

const Topics = (props) => {
    let topicMenu = props.data.filter(item => {
        return !!item.tab;
    }).map(item => {
        return <Item key={item.id} tabName={changeTabSchema(item.tab)} {...item}/>
    });

    const handerPage = (page, isNext) => (props.hanlderPage(page, isNext));

    return (
        <main id='main'>
            <Sidebar />
            <div id='content'>
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
                    <div className='inner no-padding'>
                        <ul className='topic-list'>
                            { topicMenu }
                        </ul>
                        <div className='page'>
                            <a className={props.page <= 1 ? 'disabled' : ''} onClick={handerPage.bind(null, props.page-1, false)}>上一页</a>
                            <a onClick={handerPage.bind(null, props.page+1, true)}>下一页</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Topics;
