'use strict';

const signInList = [
        {
            title: '首页',
            path: '/'
        },
        {
            title: '未读信息',
            path: '/my/messages'
        },
        {
            title: '退出',
            path: '/out',
        }
    ],
    signOutList = [
        {
            title: '首页',
            path: '/'
        },
        {
            title: '登陆',
            path: '/login'
        }
    ],
    subNavList = [
        {
            title: '全部',
            path: '/all'
        },
        {
            title: '精华',
            path: '/good'
        },
        {
            title: '分享',
            path: '/share'
        },
        {
            title: '问题',
            path: '/ask'
        },
        {
            title: '招聘',
            path: '/job'
        },
        {
            title: '测试',
            path: '/dev'
        }
    ];

module.exports = { signInList, signOutList, subNavList };
