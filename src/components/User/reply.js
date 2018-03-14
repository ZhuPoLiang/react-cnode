'use strict';

import React from 'react';

import { compareDate } from '../../util/util';

import Item from './item';

const Reply = (props) => {
    let {panel_name, data} = props

    let list = data.filter((item, index) => (index <= 4)).map(item => {
        return <Item key={item.id} {...item}/>
    });

    return (
        <div className='panel'>
            <div className='header'>最近{panel_name}的话题</div>
            <div className='inner no-padding'>
                <ul className='topic-list'>
                    { data.length ? list : (<li className='cell'>最近无新{panel_name}话题</li>) }
                </ul>
            </div>
        </div>
    );
}

export default Reply;
