'use strict';

import { SHOW_LOADING, HIDE_LOADING } from './actions';

const loading = (state = {}, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return Object.assign({}, state, {
                isLoading: true,
                text: action.text
            });

        case HIDE_LOADING:
            return Object.assign({}, state, {
                isLoading: false
            });

        default:
            return state;
    }
};

export default loading;
