'use strict';

import { fetchUserInfo } from '../../api/user';
import { showLoading, hideLoading } from '../Tips/actions';

export const FETCH_USER = 'FETCH_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const saveData = (id, data) => ({
    type: FETCH_USER,
    id,
    data
});

export const clearData = () => ({
    type: CLEAR_USER
});

export const fetchInfo = id => {
    return dispatch => {
        dispatch(showLoading());
        fetchUserInfo(id).then(res => {
            dispatch(hideLoading());
            dispatch(saveData(id, res.data));
        });
    }
}

export const clearUser = () => {
    return dispatch => {
        dispatch(clearData());
    }
}
