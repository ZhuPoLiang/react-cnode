'use strict';

import './index.styl';

import React from 'react';

const Sidebar = (props) => {
    return (
        <div id='sidebar'>
            <div className='panel'>
                <div className='inner'>
                    CNode：Node.js专业中文社区
                </div>
            </div>
            <div className='panel'>
                <div className='header'>
                    <span className='col_fade'>友情社区</span>
                </div>
                <div className='inner'>
                    <ol className="friendship-community">
                        <li>
                          <a href="https://ruby-china.org/" target="_blank">
                            <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png"/>
                          </a>
                        </li>
                        <div className="sep10"></div>
                        <li>
                          <a href="http://golangtc.com/" target="_blank">
                            <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png"/>
                          </a>
                        </li>
                        <div className="sep10"></div>
                        <li>
                          <a href="http://phphub.org/" target="_blank">
                            <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png"/>
                          </a>
                        </li>
                        <div className="sep10"></div>
                        <li>
                          <a href="https://testerhome.com/" target="_blank">
                            <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                          </a>
                        </li>
                      </ol>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
