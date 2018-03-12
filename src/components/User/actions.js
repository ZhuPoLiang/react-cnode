'use strict';

import { fetchUserInfo } from '../../api/user';
import { showLoading, hideLoading } from '../Loading/actions';

export const FETCH_USER = 'FETCH_USER';

export const saveUser = (id, data) => ({
    type: FETCH_USER,
    id,
    data
});

export const fetchInfo = (id) => {
    return dispatch => {
        dispatch(showLoading());
        fetchUserInfo(id).then(res => {
            dispatch(hideLoading());
            dispatch(saveUser(id, res.data));
        });
    }
}
