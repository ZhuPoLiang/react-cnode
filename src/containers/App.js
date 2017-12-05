'use strict';

import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

import { showLoading } from '../actions/loading';
import { loginSucceed, loginFailed, logout } from '../actions/login';

const handleSignIn = (dispatch) => {
    dispatch(loginSucceed('登陆成功'));

    return (dispatch, getState) => {
        dispatch(showLoading('登陆成功'));
    };
};

const handleSignOut = () => {
    dispatch(logout());

    return (dispatch, getState) => {
        dispatch(showLoading('注销账户'));
    };
}

export default connect(
    (state) => {
        return state;
    },
    (dispatch) => {
        return {
            showLoading: () => {
                dispatch(showLoading('我要加载', true));
            },
            handleSignIn: () => {
                dispatch(handleSignIn(dispatch));
            },
            handleSignOut: () => {
                dispatch(handleLogin(dispatch));
            }
        }
    }
)(App);
