'use strict';

import { FETCH_TOPIC, ERROR_TOPIC  } from './actions';

// 初始化数据
const initState = {
    id: '',
    data: []
};

const topic = (state = initState, action) => {
    switch (action.type) {
        case FETCH_TOPIC:
            return Object.assign({}, state, {
                id: action.id,
                data: action.data
            });

        case ERROR_TOPIC:
            return Object.assign({}, state, {
                data: []
            });

        default:
            return state;
    }
};

export default topic;
