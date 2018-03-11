'use strict';

import { FETCH_TOPICS, ERROR_TOPICS  } from './actions';

// 初始化数据
const initState = {
    tab: '',
    data: []
};

const topics = (state = initState, action) => {
    switch (action.type) {
        case FETCH_TOPICS:
            return Object.assign({}, state, {
                tab: action.tab,
                data: action.data
            });

        case ERROR_TOPICS:
            return Object.assign({}, state, {
                data: []
            });

        default:
            return state;
    }
};

export default topics;
