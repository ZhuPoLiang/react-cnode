'use strict';

import './index.styl';
import loadingSvg from './loading.svg';

import React from 'react';

const Loading = (props) => {
    return (
        <div id="tips">
            <div className="inner loading">
                <i className="iconfont icon-loading"></i>
                <span className="content">{props.text}</span>
            </div>
        </div>
    );
}

export default Loading;
