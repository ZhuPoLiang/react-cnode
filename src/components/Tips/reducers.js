'use strict';

import { SHOW_LOADING, HIDE_LOADING } from './actions';

const initState = {
    isShow: false,
    icon: 'loading',
    text: '正在加载...'
};

const tips = (state = initState, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return Object.assign({}, state, {
                isShow: true,
                icon: action.icon,
                text: action.text
            });

        case HIDE_LOADING:
            return Object.assign({}, state, {
                isShow: false
            });

        default:
            return state;
    }
};

export default tips;
