'use strict';

const signInMenu = [
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
];

const signOutMenu = [
    {
        title: '首页',
        path: '/'
    },
    {
        title: '登陆',
        path: '/login'
    }
];

const subMenu = [
    {
        title: "全部",
        path: "/all"
    },
    {
        title: "精华",
        path: "/good"
    },
    {
        title: "问答",
        path: "/ask"
    },
    {
        title: "分享",
        path: "/share"
    },
    {
        title: "招聘",
        path: "/job"
    },
    {
        title: "测试",
        path: "/dev"
    }
];

module.exports = { signInMenu, signOutMenu, subMenu };
