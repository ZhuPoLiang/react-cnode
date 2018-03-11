'use strict';

import './index.styl';

import React from 'react';

import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import Loading from '../Loading';
import RouterMain from '../../routers/main';
import { signInMenu, signOutMenu } from '../../routers/list';

const Home = (props) => {
    return (
        <div className='page-wrapped'>
            <Header topMenu={signOutMenu}/>
            <main id='main'>
                <div id='content'>
                    <RouterMain />
                </div>
            </main>
            <Footer />
            {
                props.loading.isLoading ? <Loading text="正在加载..." /> : null
            }
        </div>
    )
}

export default Home;
