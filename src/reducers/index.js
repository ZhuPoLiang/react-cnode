'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// 引入容器组件的局部 reducer
import loading from '../components/Loading/reducers';
import login from './login';
import user from '../components/User/reducers';
import topic from '../components/Topic/reducers';
import topics from '../components/Topics/reducers';

// 加入router reducer合并到主reducer
const reducers = {
    loading,
    login,
    user,
    topic,
    topics,
    routing: routerReducer
};

export default combineReducers(reducers);
