'use strict';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export const showLoading = (text) => ({
    type: SHOW_LOADING,
    text
});

export const hideLoading = () => ({
    type: HIDE_LOADING
});
