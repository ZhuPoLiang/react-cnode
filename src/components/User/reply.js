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
            <div className='header'>
                {panel_name}
            </div>
            <div className='inner no-padding'>
                <ul className='topic-list'>
                    { list }
                </ul>
            </div>
        </div>
    );
}

export default Reply;
