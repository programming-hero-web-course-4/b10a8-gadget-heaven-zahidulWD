import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ShopIcon from '../../../assets/images/shop.png';
import HeartIcon from '../../../assets/images/heart.png';

const Navbar = ({ cartItemCount, wishlistCount }) => {

    const location = useLocation();
    

    const isHomePage = location.pathname === '/';

    const links = <>
        <NavLink className={`text-[14px] sm:text-base lg:text-[14px] xl:text-base font-medium mx-6 lg:mx-4 xl:mx-6 py-2 lg:py-0 ${isHomePage ? 'text-white' : 'text-black'}`} to={'/'}>Home</NavLink>
        <NavLink className={`text-[14px] sm:text-base lg:text-[14px] xl:text-base font-medium mx-6 lg:mx-4 xl:mx-6 py-2 lg:py-0 ${isHomePage ? 'text-white' : 'text-black'}`} to={'/statistics'}>Statistics</NavLink>
        <NavLink className={`text-[14px] sm:text-base lg:text-[14px] xl:text-base font-medium mx-6 lg:mx-4 xl:mx-6 py-2 lg:py-0 ${isHomePage ? 'text-white' : 'text-black'}`} to={'/dashboard'}>Dashboard</NavLink>
        <NavLink className={`text-[14px] sm:text-base lg:text-[14px] xl:text-base font-medium mx-6 lg:mx-4 xl:mx-6 py-2 lg:py-0 ${isHomePage ? 'text-white' : 'text-black'}`} to={'/demo-page'}>Timeline(Demo)</NavLink>
    </>

    return (
        <div className='w-full max-w-[1600px] mx-auto px-2 md:px-[30px] z-[500] relative'>
            <div className={`${isHomePage ? 'pt-6' : 'pt-0'}`}>
                <div className={`navbar header-nav bg-transparent container pt-5 px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="lg:hidden btn__div mr-3 border border-[#EAEAEA] rounded-full p-2 bg-white">
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
                                className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${isHomePage ? 'bg-black' : 'bg-white'}`}>
                                {links}
                            </ul>
                        </div>
                        <Link href='#' className={`text-[14px] sm:text-xl font-bold ${isHomePage ? 'text-white' : 'text-black'} `}>Gadget Heaven</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className='me-4 relative'><img src={ShopIcon} alt="image" /> <span className='bg-[#D8DADF] absolute -right-2 -top-0 text-center inline-block w-5 h-5 leading-5 rounded-full text-xs shop'>{cartItemCount}</span></button>
                        <button className='relative'><img src={HeartIcon} alt="image" /> <span className='bg-[#D8DADF] absolute -right-2 -top-0 text-center inline-block w-5 h-5 leading-5 rounded-full text-xs wishList'>{wishlistCount}</span></button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;