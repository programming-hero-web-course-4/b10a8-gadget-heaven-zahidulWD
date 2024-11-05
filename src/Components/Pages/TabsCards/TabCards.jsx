import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TabCard from '../TabCard/TabCard';

const TabCards = () => {
    const cards = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filterProducts = cards.filter(item => item.category === category);
            setProducts(filterProducts);
        } else {
            setProducts(cards);
        }
    }, [cards, category]);

    return (
        <div>
            <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                {products.map(card => (
                    <TabCard key={card.product_id} card={card} />
                ))}
            </div>
        </div>
    );
};

export default TabCards;
