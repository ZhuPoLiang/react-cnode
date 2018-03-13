'use strict';

import './index.styl';

import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Tips from '../Tips';
import RouterMain from '../../routers/main';
import { signInMenu, signOutMenu } from '../../routers/list';

const Home = (props) => {
    return (
        <div className='page-wrapped'>
            <Header topMenu={signOutMenu}/>
            <RouterMain />
            <Footer />
            {
                props.tips.isShow ? <Tips {...props.tips}/> : null
            }
        </div>
    )
}

export default Home;
