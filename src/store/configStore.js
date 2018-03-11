'use strict';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';

// 引入合并的reducer
import reducers from '../reducers';

// 生成 router中间件
const history = createBrowserHistory(),
    routeMiddleware = routerMiddleware(history);

// 注入中间件
const configureStore = compose(
    applyMiddleware(
        routeMiddleware,
        thunkMiddleware
    )
)(createStore);

// 合并默认state输出
export default (initialState) => {
    return configureStore(reducers, initialState);
};
