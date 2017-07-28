'use strict';

import './index.styl';

import React from 'react';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';

export default class NavBar extends React.Component {
    static defaultProps = {
        navList: [
            {
                title: '全部',
                tab: 'all'
            },
            {
                title: '精华',
                tab: 'good'
            },
            {
                title: '分享',
                tab: 'share'
            },
            {
                title: '问答',
                tab: 'ask'
            },
            {
                title: '招聘',
                tab: 'job'
            },
            {
                title: '客户端测试',
                tab: 'dev'
            }
        ]
    }

    render() {
        return (
            <nav id='nav-bar'>
                <div className='inner'>
                    <Logo />
                    <Nav navList={this.props.navList} />
                </div>
            </nav>
        )
    }
};
