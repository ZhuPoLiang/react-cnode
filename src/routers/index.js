'use strict';

import Topic from '../components/Topic';
import NotFound from '../components/NotFound';

export default [
    {
        title: '全部',
        isNavLink: true,
        path: '/',
        component: Topic
    },
    {
        title: '精华',
        isNavLink: true,
        path: '/good',
        component: Topic
    },
    {
        title: '分享',
        isNavLink: true,
        path: '/share',
        component: Topic
    },
    {
        title: '问题',
        isNavLink: true,
        path: '/ask',
        component: Topic
    },
    {
        title: '招聘',
        isNavLink: true,
        path: '/job',
        component: NotFound
    },
    {
        title: '测试',
        isNavLink: true,
        path: '/dev',
        component: NotFound
    },
    {
        title: '话题',
        isNavLink: false,
        path: '/topic/:id',
        component: Topic
    },
    {
        title: '错误',
        isNavLink: false,
        path: '/prompt/404',
        component: NotFound
    }
];
