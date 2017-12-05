'use strict';

// action
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export const showLoading = (text, isLoading = true) => ({
    type: SHOW_LOADING,
    text,
    isLoading
});

export const hideLoading = () => ({
    type: HIDE_LOADING
});
