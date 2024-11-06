import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate('/'); 
    };

    return (
        <div className='flex flex-col items-center mt-8 bg-white'>
            <h2 className='text-5xl text-red-600 text-center mt-4'>Page not found</h2>
            <p className='text-2xl text-center mt-4'>Please try again</p>
            <button 
                className="btn btn-outline btn-success mt-4 mb-4 text-white"
                onClick={goToHomePage}
            >
                Go to home page
            </button>
        </div>
    );
};

export default ErrorPage;
