'use strict';

import { fetchTopicList } from '../../api/topic';
import { showLoading, hideLoading } from '../Loading/actions';

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const ERROR_TOPICS = 'ERROR_TOPICS';

export const saveTopics = (tab, data) => ({
    type: FETCH_TOPICS,
    tab,
    data
});

export const fetchList = (tabType) => {
    return dispatch => {
        dispatch(showLoading());
        fetchTopicList(tabType).then(res => {
            dispatch(hideLoading());
            dispatch(saveTopics(tabType, res.data));
        });
    }
}
