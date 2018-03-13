'use strict';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

// 引入合并的reducer
import reducers from '../reducers';

// 注入中间件
const configureStore = compose(
    applyMiddleware(
        thunkMiddleware
    )
)(createStore);

// 合并默认state输出
export default (initialState) => {
    return configureStore(reducers, initialState);
};
