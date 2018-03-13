'use strict';

import { get } from '../util/fetch';

export const fetchTopicList = (tab, page) => {
    return get('/api/v1/topics?tab='+ tab + '&page='+ page).then(res => {
        if (res.status !== 200) {
            return false;
        } else {
            return res.data;
        }
    });
};

export const fetchTopicSingle = (id) => {
    return get('/api/v1/topic/'+ id).then(res => {
        if (res.status !== 200) {
            return false;
        } else {
            return res.data;
        }
    });
};
