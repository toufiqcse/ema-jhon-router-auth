import React from 'react';
import {AiFillDelete} from 'react-icons/ai'
const ReviewOrder = ({product,handleRemoveItem}) => {
    const {id,name, price, shipping, quantity,img} = product;
    return (
        <div className='flex w-3/4 mx-auto border-gray-200 border-2 p-2 rounded-md my-[16px]'>
            <img className='w-[91px]' src={img} alt="" />
            <div className='flex justify-between items-center w-full'>
                <div className='mx-3'>
                    <p>{name}</p>
                    <p>Price: $ {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='flex items-center    '>
                    <button onClick={() => handleRemoveItem(id)} className='bg-slate-500 rounded-full p-2'>
                        <AiFillDelete className='text-3xl text-red-700  '></AiFillDelete></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;