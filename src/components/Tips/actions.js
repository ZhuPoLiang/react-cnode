'use strict';

export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export const showLoading = (icon = 'loading', text = '正在加载...') => ({
    type: SHOW_LOADING,
    icon,
    text
});

export const hideLoading = () => ({
    type: HIDE_LOADING
});
