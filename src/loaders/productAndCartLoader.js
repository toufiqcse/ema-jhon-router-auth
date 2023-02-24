import { getShoppingCart } from "../Utilities/fakedb";

export const productsAndCartLoader = async () => {
  const productsData = await fetch("emajhonProducts.json");
  const products = await productsData.json();
  //get cart
  const savedCart = getShoppingCart();
  const previousCart = [];
  //   console.log("saved cart", savedCart);
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    // console.log(id, addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      previousCart.push(addedProduct);
    }
  }

  return { products: products, previousCart: previousCart };
};
