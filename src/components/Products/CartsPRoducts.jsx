import React from 'react';
import { NavLink } from 'react-router-dom';

const CartsPRoducts = ({carts,clearCart}) => {
    let total = 0;
    let quantity = 0;
  for (const product of carts) {
    // console.log(product.price);
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
  }
  const tax = total * 0.1;
  const taxTk = parseFloat(tax.toFixed(2));
  const grand = total + taxTk;
  const grandTotal = grand.toFixed(2);
    return (
        <div className='px-6 text-xl font-semibold text-slate-800 py-2 flex flex-col'>
            <div className='py-1'>
              <p>Total Item: {quantity}</p>
              <p>Total Price: {total}</p>
              <p>Tax: {taxTk}</p>                       
              <p>Grand Total: {grandTotal}</p>
            </div>
            <div><button  onClick={clearCart} className='border-none text-white/80 bg-red-400 rounded-sm px-3 py-1 my-2'>Clear Cart</button></div>
            <div>
            <NavLink to='/order' className='border-none text-white/80 bg-green-400 rounded-sm px-3 py-1'>Review Order</NavLink>
            </div>
        </div>
    );
};  

export default CartsPRoducts;