'use strict';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export const showLoading = (text = 'loading...', isLoading = false) => {
    type: SHOW_LOADING,
    text,
    isLoading
};

export const hideLoading = () => {
    type: HIDE_LOADING
};
