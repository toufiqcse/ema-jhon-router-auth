// @ts-nocheck
import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../Utilities/fakedb";
import CartsPRoducts from "../Products/CartsPRoducts";
import ReviewOrder from "./ReviewOrder";

const Order = () => {
  const { products, previousCart } = useLoaderData();
  const [cart, setCart] = useState(previousCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div>
      <h1 className="text-center text-3xl my-10">This is Order Page</h1>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          {cart.map((product) => (
            <ReviewOrder
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewOrder>
          ))}
          {cart.length === 0 && (
            <p
              className="text-xl text-cen
                        "
            >
              No items available for review. Please shop more..
              <NavLink
                to="/products"
                className="text-blue-500 text-small underline"
              >
                Shop More
              </NavLink>{" "}
            </p>
          )}
        </div>
        <div className="bg-green-100">
          <CartsPRoducts carts={cart} clearCart={clearCart}>
          <Link to="/shipping" className="bg-green-500 p-1 text-white">
                <button>Shipping</button>
              </Link>
          </CartsPRoducts>
        </div>
      </div>
    </div>
  );
};

export default Order;
