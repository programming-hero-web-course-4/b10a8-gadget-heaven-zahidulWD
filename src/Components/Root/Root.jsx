import Navbar from '../Pages/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import { useState, useEffect } from 'react';

const Root = () => {
    const location = useLocation();
    const [cartItemCount, setCartItemCount] = useState(0);
    const [wishlistCount, setWishlistCount] = useState(0);

    useEffect(() => {
        let pageTitle = 'Home | Gadget Heaven';
        if (location.pathname === '/') {
            document.title = pageTitle;
        } else if (location.pathname === '/dashboard') {
            document.title = 'Dashboard | Gadget Heaven';
        } else if (location.pathname === '/statistics') {
            document.title = 'Statistics | Gadget Heaven';
        } else if (location.pathname === '/demo-page') {
            document.title = 'Demo(Faqs) | Gadget Heaven';
        } else {
            document.title = 'Gadget Heaven';
        }
    }, [location]);

    return (
        <div>
            <Navbar cartItemCount={cartItemCount} wishlistCount={wishlistCount}></Navbar>
            <Outlet context={{ setCartItemCount, setWishlistCount }}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
