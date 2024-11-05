import React from 'react';
import { Link } from 'react-router-dom';

const TabCard = ({card}) => {

    const {product_image, product_id, product_title, price} = card;

    return (
        <div className='bg-white p-5 rounded-2xl flex flex-col'>
            <img className='w-full h-44 object-contain' src={product_image} alt="image" />
            <h2 className='text-[18px] 2xl:text-2xl text-[#09080F] font-semibold mt-4 mb-2 2xl:mt-6 2xl:mb-3'>{product_title}</h2>
            <p className='text-base 2xl:text-xl font-medium text-[#09080F99] flex-grow'>Price: {price}k</p>
            <div>
                <Link to={`/products/${product_id}`} className='btn btn-outline border-[#9538E2] rounded-[32px] h-auto min-h-auto py-3 px-5 text-[#9538E2] mt-4'>View Details</Link>
            </div>
        </div>
    );
};

export default TabCard;