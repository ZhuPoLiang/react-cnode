'use strict';

import './index.styl';
import loadingSvg from './loading.svg';

import React from 'react';

export default class Loading extends React.Component {
    render() {
        return (
            <div id="loading">
                <div className="inner loading">
                    <i className="iconfont icon-loading"></i>
                    <span className="content">11111212</span>
                </div>
            </div>
        )
    }
}
