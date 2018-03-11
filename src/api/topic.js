'use strict';

import { get } from '../util/fetch';

export const fetchTopicList = (tabType) => {
    return get('/api/v1/topics'+ (tabType ? ('?tab='+ tabType) : '')).then(res => {
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
