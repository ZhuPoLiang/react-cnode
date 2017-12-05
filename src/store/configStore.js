'use strict';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

// 加入中间件
const finalCreateStore = compose(
    applyMiddleware(
        routerMiddleware(createBrowserHistory()),
        thunkMiddleware
    )
)(createStore);

// 加入router reducer
const reducer = combineReducers(Object.assign({}, reducers, {
    routing: routerReducer
}));

export default (initialState) => {
    return finalCreateStore(reducer, initialState);
};
