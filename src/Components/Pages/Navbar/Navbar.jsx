import React from 'react';
import { NavLink } from 'react-router-dom';
import ShopIcon from '../../../assets/images/shop.png';
import HeartIcon from '../../../assets/images/heart.png';

const Navbar = () => {

    const links = <>
        <NavLink className={'text-[14px] sm:text-base font-medium mx-6 py-2 lg:py-0'} to={'/'}>Home</NavLink>
        <NavLink className={'text-[14px] sm:text-base font-medium mx-6 py-2 lg:py-0'} to={'/statistics'}>Statistics</NavLink>
        <NavLink className={'text-[14px] sm:text-base font-medium mx-6 py-2 lg:py-0'} to={'/dashboard'}>Dashboard</NavLink>
    </>

    return (
        <div className="navbar header-nav bg-transparent container px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden btn__div mr-3 border border-[#EAEAEA] rounded-full p-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href='#' className="text-[14px] sm:text-xl font-bold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='me-4'><img src={ShopIcon} alt="image" /></button>
                <button><img src={HeartIcon} alt="image" /></button>
            </div>
        </div>


    );
};

export default Navbar;