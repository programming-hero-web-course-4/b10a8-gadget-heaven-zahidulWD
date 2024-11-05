import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = ({tabs}) => {
    return (
        <div className='tabs-area'>
            <div>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `py-[14px] px-7 rounded-[32px] block text-[14px] md:text-[18px] font-medium ${isActive ? 'font-extrabold text-white bg-[#9538E2]' : 'text-[#09080F99]'}`}>
                    All Products
                </NavLink>


                {tabs.map(tab => (
                    <NavLink 
                        key={tab.id} 
                        to={`/tabs/${tab.category}`} 
                        className={({ isActive }) => 
                            `py-[14px] px-7 rounded-[32px] block text-[14px] md:text-[18px] font-medium ${isActive ? 'font-extrabold text-white bg-[#9538E2]' : 'text-[#09080F99]'}`}>
                        {tab.category}
                    </NavLink>
                ))}

            </div>
        </div>
    );
};

export default Tabs;