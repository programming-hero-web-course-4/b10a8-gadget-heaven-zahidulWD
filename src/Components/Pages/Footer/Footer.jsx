import React from 'react';

const Footer = () => {
    return (
        <footer className='pt-[60px] pb-8 md:py-[100px] bg-white'>
            <div className='container px-4 sm:px-10 md:px-14 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
                <div className='footer-title text-center border-b border-[#09080F1A] pb-8 mb-8'>
                    <h2 className='text-xl sm:text-[32px] font-bold text-[#09080F] mb-3'>Gadget Heaven</h2>
                    <p className='text-[14px] sm:text-base font-medium text-[#09080F99]'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap justify-around'>
                    <div className='ftr-links text-center w-full mb-6 sm:mb-0 sm:w-auto'>
                        <h3 className='text-[18px] font-bold text-[#09080F] mb-4'>Services</h3>
                        <ul>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Product Support</a></li>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Order Tracking</a></li>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Shipping & Delivery</a></li>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Returns</a></li>
                        </ul>
                    </div>
                    <div className='ftr-links text-center w-full mb-6 sm:mb-0 sm:w-auto'>
                        <h3 className='text-[18px] font-bold text-[#09080F] mb-4'>Company</h3>
                        <ul>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">About Us</a></li>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Careers</a></li>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className='ftr-links text-center w-full mb-6 sm:mb-0 sm:w-auto'>
                        <h3 className='text-[18px] font-bold text-[#09080F] mb-4'>Legal</h3>
                        <ul>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Terms of Service</a></li>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Privacy Policy</a></li>
                            <li><a className='text-base font-normal mb-2 inline-block text-[#09080F99]' href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;