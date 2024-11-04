import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({tab}) => {
    return (
        <div className='tabs-area'>
            <div>
                <NavLink className={'py-[14px] px-7 rounded-[32px] block text-[18px] font-medium text-[#09080F99]'} to={`/tabs/${tab.category}`}>{tab.category}</NavLink>
            </div>
        </div>
    );
};

export default Tabs;