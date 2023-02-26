// @ts-nocheck
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProcessOrder = () => {
    const orders = useLoaderData()
    console.log(orders);
    return (
        <div>
            <div className='px-6 text-xl font-semibold text-slate-800 py-1'>
                <p>Total Item:{orders.length} </p>
                <p>Total Price:</p>
                <p>Tax:</p>
                <p>Shipping:</p>
                <p>Grand Total:</p>
            </div>
        </div>
    );
};

export default ProcessOrder;