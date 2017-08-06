'use strict';

import './index.styl';

import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id='footer'>
                <p>这是一趟全新的旅程，一起出发吧！！</p>
                <p>Webpack 3.x、React 15、Redux、React-Router 4.x</p>
            </footer>
        )
    }
}
