'use strict';

import './index.styl';

import React from 'react';

const Tips = (props) => {
    let {icon, text} = props;

    return (
        <div id='tips'>
            <div className={'inner '+ icon}>
                <i className={'iconfont icon-'+ icon}></i>
                <span className='content'>{text}</span>
            </div>
        </div>
    );
}

export default Tips;
