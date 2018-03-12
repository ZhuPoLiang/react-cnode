'use strict';

import { FETCH_USER } from './actions';

// 初始化数据
const initState = {
    id: '',
    data: {
        avatar_url: '',
        loginname: '',
        recent_topics: [],
        recent_replies: [],
        score: 0
    }
};

const user = (state = initState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return Object.assign({}, state, {
                id: action.id,
                data: action.data
            });

        default:
            return state;
    }
};

export default user;
