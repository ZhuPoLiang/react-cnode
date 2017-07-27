'use strict'

import indexStyle from '../common/styles/index';
import React from 'react';

export default class SayHello extends React.Component {
    render() {
        return (
            <div className={indexStyle.content}>
                <h1>新的旅程即将开始！！</h1>
            </div>
        )
    }
};
