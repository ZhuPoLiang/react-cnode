'use strict';

import Topics from '../components/Topics';
import Topic from '../components/Topic';
import NotFound from '../components/NotFound';

export default [
    {
        title: '全部',
        isNavLink: true,
        path: '/',
        component: Topics
    },
    {
        title: '精华',
        isNavLink: true,
        path: '/good',
        component: Topics
    },
    {
        title: '分享',
        isNavLink: true,
        path: '/share',
        component: Topics
    },
    {
        title: '问题',
        isNavLink: true,
        path: '/ask',
        component: Topics
    },
    {
        title: '招聘',
        isNavLink: true,
        path: '/job',
        component: Topics
    },
    {
        title: '测试',
        isNavLink: true,
        path: '/dev',
        component: Topics
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
