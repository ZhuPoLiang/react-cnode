'use strict';

import './index.styl';

import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Loading from '../Loading';
import RouterMain from '../../routers/main';
import { signInMenu, signOutMenu } from '../../routers/list';

const Home = (props) => {
    return (
        <div className='page-wrapped'>
            <Header topMenu={signOutMenu}/>
            <RouterMain />
            <Footer />
            {
                props.loading.isLoading ? <Loading text="正在加载..." /> : null
            }
        </div>
    )
}

export default Home;
