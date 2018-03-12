'use strict';

import { FETCH_TOPIC, CLEAR_TOPIC  } from './actions';

// 初始化数据
const initState = {
    id: '',
    data: {
        author: {
            avatar_url: '',
            loginname: ''
        },
        replies: [],
        reply_count: 0,
        visit_count: 0
    }
};

const topic = (state = initState, action) => {
    switch (action.type) {
        case FETCH_TOPIC:
            return Object.assign({}, state, {
                id: action.id,
                data: action.data
            });

        case CLEAR_TOPIC:
            return initState;

        default:
            return state;
    }
};

export default topic;
