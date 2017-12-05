'use strict';

import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT  } from '../actions/login';

const login = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                text: action.text,
                isLogged: action.isLogged
            });

        case LOGIN_FAILED:
            return Object.assign({}, state, {
                isLogged: !state.isLogged
            });

        case LOGOUT:
            return Object.assign({}, state, {
                isLogged: !state.isLogged
            });

        default:
            return state;
    }
};

export default login;
