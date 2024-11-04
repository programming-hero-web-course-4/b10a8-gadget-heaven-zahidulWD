import React from 'react';
import { Link } from 'react-router-dom';

const TabCard = ({ card }) => {
    const { product_title, price, product_image } = card;

    return (
        <div className='bg-white p-5 rounded-2xl flex flex-col'>
            <img src={product_image} alt={product_title} className='w-full h-auto rounded-lg' />
            <h2 className='text-2xl text-[#09080F] font-semibold mt-6 mb-3'>{product_title}</h2>
            <p className='text-xl font-medium text-[#09080F99] flex-grow'>Price: {price}k</p>
            <div>
                <Link className='btn btn-outline border-[#9538E2] rounded-[32px] h-auto min-h-auto py-3 px-5 text-[#9538E2] mt-4'>
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default TabCard;
