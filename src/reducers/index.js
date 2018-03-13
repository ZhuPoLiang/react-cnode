'use strict';

import { combineReducers } from 'redux';

// 引入容器组件的局部 reducer
import tips from '../components/Tips/reducers';
import user from '../components/User/reducers';
import topic from '../components/Topic/reducers';
import topics from '../components/Topics/reducers';

// 加入router reducer合并到主reducer
const reducers = {
    tips,
    user,
    topic,
    topics
};

export default combineReducers(reducers);
