'use strict';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export const loginSucceed = (text, isLogged = true) => ({
    type: LOGIN_SUCCESS,
    isLogged,
    text,
});

export const loginFailed = () => ({
    type: LOGIN_FAILED
});

export const logout = () => ({
    type: LOGOUT
});
