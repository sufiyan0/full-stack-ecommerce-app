"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";
import { set } from "sanity";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);


  let foundProduct;
  let index;
  // const onadd = (product, quantity) => {
  //   console.log(product);
  //   const checkProductInCart = cartItem.find(
  //     (item) => item._id === product._id
  //   );

  //   setTotalPrice(
  //     (prevTotalPrice) => prevTotalPrice + product.price * quantity
  //   );
  //   setTotalQuantities((prevTotalQuantiteis) => prevTotalQuantiteis + 1);

  //   if (checkProductInCart) {
  //     const updatecartItem = cartItem.map((cartProduct) => {
  //       if (cartProduct._id === product._id)
  //         return {
  //           ...cartProduct,
  //           quantity: cartProduct.quantity + quantity,
  //         };
  //     });

  //     setCartItem(updatecartItem);
  //   } else {
  //     product.quantity = quantity;
  //     setCartItem([...cartItem, { ...product }]);
  //   }
  //   toast(`${qty} ${product[0].name} added to the cart.`);
  // };


  const onadd = (product, quantity) => {
    const checkProductInCart = cartItem.find((item) => item._id === product._id);
    
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    
    if(checkProductInCart) {
      const updatedcartItem = cartItem.map((cartProduct) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItem(updatedcartItem);
    } else {
      product.quantity = quantity;
      
      setCartItem([...cartItem, { ...product }]);
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  } 

  const onRemove = (product) => {
    foundProduct = cartItem.find((item) => item._id === product._id);
    const newCartItems = cartItem.filter((item) => item._id !== product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
    setCartItem(newCartItems);
  }

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItem.find((item) => item._id === id)
    index = cartItem.findIndex((product) => product._id === id);
    const newCartItems = cartItem.filter((item) => item._id !== id)

    if(value === 'inc') {
      setCartItem([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    } else if(value === 'dec') {
      if (foundProduct.quantity > 1) {
        setCartItem([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
      }
    }
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItem,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onadd,
        toggleCartItemQuanitity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
