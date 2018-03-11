'use strict';

import { get } from '../util/fetch';

export const fetchUserInfo = (id) => {
    return get('/api/v1/user/'+ id).then(res => {
        if (res.status !== 200) {
            return false;
        } else {
            return res.data;
        }
    });
};
