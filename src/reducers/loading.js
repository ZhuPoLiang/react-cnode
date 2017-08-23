'use strict';

import { SHOW_LOADING, HIDE_LOADING } from '../actions/loading';

const loading = (state, action) => {
    switch (action.type) {
        case SHOW_LOADING:
            return Object.assign({}, state, {
                text: action.text,
                isLoading: action.isLoading
            });

        case HIDE_LOADING:
            return Object.assign({}, state, {
                isLoading: !state.isLoading
            });

        default:
            return state;
    }
}

export default loading;
