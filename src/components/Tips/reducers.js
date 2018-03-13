'use strict';

import { SHOW_LOADING, HIDE_LOADING } from './actions';

const tips = (state = {}, action) => {
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
