import React from "react";
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import WishListImg from '../../../assets/images/wishlist.png';
import ShopImg2 from '../../../assets/images/shop1.png'
import { addStoredWishList, addToStoredCardList, getStoredCardList, getStoredWishList } from "../Utility/addToDb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const data = useLoaderData();
    const { productId } = useParams();
    const id = parseInt(productId);

    const product = data.find(item => item.product_id === id);
    if (!product) return <p>Product not found</p>;

    const { product_title, product_image, price, description, Specification, rating } = product;

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const handleAddToCard = (id) => {
        const storedList = getStoredCardList();
        if (storedList.includes(id)) {
            
            toast.error("Product is already in the cart!", {
                position: "top-center",
                autoClose: 2000,
            });
        } else {
            addToStoredCardList(id);
            toast.success("Product added to cart!", {
                position: "top-center",
                autoClose: 2000,
            });

        }
    }

    const handleAddToWishList = (id) => {
        const storedWishList = getStoredWishList();
        if (storedWishList.includes(id)) {
          
            toast.error("Product is already in the wishlist!", {
                position: "top-center",
                autoClose: 2000,
            });
        } else {
            addStoredWishList(id);
            toast.info("Product added to wishlist!", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    }

    return (
        <div className="mb-[100px]">
           
            <ToastContainer />

            <div className='products-details-banner bg-[#9538E2] pt-8 pb-[235px] text-center'>
                <h3 className='text-xl sm:text-2xl md:text-[32px] font-bold text-white mb-4'>Product Details</h3>
                <p className='text-[14px] md:text-base font-normal text-white px-5 md:px-0'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden md:block" /> the coolest accessories, we have it all!</p>
            </div>
            <div className='container pt-5 px-4 sm:px-5 lg:px-24 xl:px-0 xl:max-w-[1100px] 2xl:max-w-[1280px] mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-[5fr_7fr] gap-8 items-center rounded-3xl p-4 md:p-8 bg-white -mt-[220px]'>
                    <figure>
                        <img className='w-full bg-[#ECECEC] rounded-2xl p-3 relative' src={product_image} alt={product_title} />
                    </figure>
                    <div>
                        <h3 className="text-xl lg:text-[28px] font-semibold text-[#09080F]">{product_title}</h3>
                        <h4 className="mt-3 mb-4 text-base lg:text-xl text-[#09080FCC] font-semibold">Price: $ {price}</h4>
                        <span className="border border-[#309C08] inline-block bg-[#309C081A] text-base py-[7px] px-[14px] text-[#309C08] rounded-[32px]">In Stock</span>
                        <p className="text-base lg:text-[18px] font-normal text-[#09080F99] my-4">{description}</p>
                        <strong className="text-base lg:text-[18px] font-bold text-[#09080F] mb-3 inline-block">Specification</strong>
                        <ol className='list-decimal ps-4 mb-4'>
                            {
                                Specification.map((specification, idx) => (
                                    <li key={idx} className="text-base lg:text-[18px] font-normal text-[#09080F99] mb-1">{specification.key} : {specification.value}</li>
                                ))
                            }
                        </ol>
                        <strong className="text-base lg:text-[18px] font-bold text-[#09080F] mb-3 inline-block">Rating ⭐ </strong>
                        <div className="flex items-center gap-4">
                           
                            <ReactStars
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700" 
                                value={rating}
                            />
                            <span className="text-[14px] font-medium text-[#09080FCC] py-[7px] px-[14px] rounded-[32px] bg-[#09080F0D]">{rating}</span>
                        </div>

                        <div className="flex gap-4 items-center mt-4">
                            <button onClick={() => handleAddToCard(productId)} className="btn h-auto min-h-0 text-[18px] font-bold text-white bg-[#9538E2] rounded-[32px] py-3 px-[22px]" type="button">Add To Cart <img src={ShopImg2} alt="image" /></button>
                            <button onClick={() => handleAddToWishList(productId)} type="button"><img src={WishListImg} alt="image" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
