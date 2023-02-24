import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Product = ({product,addToCart}) => {
    const {name,id, price, img, category,seller,stock}=product;
    
    return (
        <div>
            <div className='relative bg-slate-200 h-full p-4 rounded-md border border-slate-300'>
                <div className=''>
                <div className=''>
                    <img src={img} alt="" />
                </div>
                <p className='text-center text-xl md:text-small font-semibold'>{name}</p>
                <div className='text-center n text-xl md:text-small py-1'>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                </div>
                </div>
                <div className='w-full flex justify-center md:my-3 my-7'>

                <button onClick={ () => addToCart(product)} className='absolute bottom-1 bg-green-500 px-4 md:py-1 py-2 rounded-md  mx-auto text-white md:text-small text-xl'>Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;