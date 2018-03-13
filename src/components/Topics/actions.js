'use strict';

import { fetchTopicList } from '../../api/topic';
import { showLoading, hideLoading } from '../Tips/actions';

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const ERROR_TOPICS = 'ERROR_TOPICS';

export const saveTopics = (tab, page, data) => ({
    type: FETCH_TOPICS,
    tab,
    page,
    data
});

export const fetchList = (tab, page) => {
    return dispatch => {
        dispatch(showLoading('warn', '加载错误'));
        return fetchTopicList(tab, page).then(res => {
            dispatch(hideLoading());
            dispatch(saveTopics(tab, page, res.data));
        });
    }
}
