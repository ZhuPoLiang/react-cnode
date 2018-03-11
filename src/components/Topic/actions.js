'use strict';

import { fetchTopicSingle } from '../../api/topic';
import { showLoading, hideLoading } from '../Loading/actions';

export const FETCH_TOPIC = 'FETCH_TOPIC';
export const ERROR_TOPIC = 'ERROR_TOPIC';

export const saveTopic = (id, data) => ({
    type: FETCH_TOPIC,
    id,
    data
});

export const fetchSingle = (id) => {
    return dispatch => {
        dispatch(showLoading());
        fetchTopicSingle(id).then(res => {
            dispatch(hideLoading());
            dispatch(saveTopic(id, res.data));
        });
    }
}
