import React from 'react';
import Navbar from '../Navbar/Navbar';
import BannerImage from '../../../assets/images/banner-image.png'
import { Link, Outlet, useLoaderData, useOutletContext } from 'react-router-dom';
import Tabs from '../Tabs/Tabs';

const Home = () => {

    const tabs = useLoaderData();
    // const { cartItemCount, setCartItemCount } = useOutletContext();

    return (
        <div className='main-banner'>
            <div className='max-w-[1600px] mx-auto px-2 md:px-[30px] pt-[100px] sm:pt-28 -mt-[180px] sm:-mt-[190px] relative'>
                <div className='bg-[#9538E2] border-[7px] border-[#F6F6F6] text-center rounded-3xl md:rounded-[32px] mb-20 md:mb-[190px] lg:mb-[350px] xl:mb-[490px]'>
                    <div className=''>
                        <div className='text-white banner-nav mb-7 pt-3'>
                            {/* <Navbar cartItemCount={cartItemCount}></Navbar> */}
                        </div>

                        {/* banner-area */}
                        <div className="banner-area container px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto pt-14">
                            <h1 className='lg:leading-none text-xl px-4 sm:px-0 md:text-3xl lg:text-[56px] font-bold text-white md:mb-6 mb-3'>Upgrade Your Tech Accessorize with <br className='hidden sm:block md:hidden' /> Gadget Heaven Accessories</h1>
                            <p className='text-[12px] md:text-base font-normal text-white mb-4 md:mb-8 px-4 sm:px-0'>Explore the latest gadgets that will take your experience to <br className='hidden sm:block' /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                            <Link to={`/dashboard`} className='btn text-base md:text-xl font-bold text-[#9538E2] rounded-[32px] py-3 px-6 md:py-4 md:px-7 h-auto min-h-auto mb-6 md:mb-12'>Shop now</Link>
                            <img className='mx-auto -mb-16 md:-mb-36 lg:-mb-60 xl:-mb-[390px]' src={BannerImage} alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gadgets-tabs-area */}
            <div className='gadgets-tabs-area'>
                <div className='container px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
                    <h2 className='text-xl md:text-[40px] font-bold text-[#0B0B0B] text-center mb-12'>Explore Cutting-Edge Gadgets</h2>
                    <div className='grid lg:grid-cols-[4fr_8fr] xl:grid-cols-[3fr_9fr] gap-6'>
                        <div className='bg-white p-6 border border-[#09080F1A] rounded-2xl h-[350px] md:h-[380px]'>
                            <Tabs tabs={tabs} />
                        </div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;