// @ts-nocheck
import React, { useState ,useEffect} from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../Utilities/fakedb';
import CartsPRoducts from './CartsPRoducts';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
    const [carts, setCart] = useState([]);

    // remove cart 
    const clearCart =() =>{
      setCart([]);
      deleteShoppingCart()
    }
    //load data from local storage by the fake Db
  useEffect(() => {
    const StoredCart = getShoppingCart();
    // console.log(StoredCart);
    const savedCart = [];
    for (const id in StoredCart) {
      // console.log(id);
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = StoredCart[id];
        addedProduct.quantity = quantity;
        // console.log(addedProduct);
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  //   add to Cart
  const addToCart = (selectedProduct) => {
    let newCart = [];
    
    const exists = carts.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...carts, selectedProduct];
    } else {
      const rest = carts.filter((product) => product.id !== selectedProduct.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };


    return (
        <div className='z-10'>
            <h1 className='text-center text-3xl mt-20'>This is Products  Page</h1>
            <div className='grid grid-cols-4 '>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mx-4  my-3 col-span-3'>
                {
                    products.map(product => <Product key={product.id} addToCart={addToCart}  product={product}></Product>)
                }
                </div>
            <div className=''>
                <div className='bg-green-100'>
                    <div className='text-center text-2xl text-slate-500 font-bold py-4'>
                        Order Summary
                    </div>
                    <CartsPRoducts carts={carts} clearCart={clearCart}></CartsPRoducts>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Products;