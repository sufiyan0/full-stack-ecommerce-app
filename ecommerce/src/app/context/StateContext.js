"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
import toast, { Toaster } from "react-hot-toast";
import { set } from "sanity";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const onadd = (product, quantity) => {
    console.log(product)
    const checkProductInCart = cartItem.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
      );
      setTotalQuantities((prevTotalQuantiteis) => prevTotalQuantiteis + 1);
      
      if (checkProductInCart) {
        const updateCartitems = cartItem.map((cartProduct) => {
          if (cartProduct._id === product._id)
          return {
        ...cartProduct,
        quantity: cartProduct.quantity + quantity,
      };
    });
    
    setCartItem(updateCartitems);
  } else {
    product.quantity = quantity;
    setCartItem([...cartItem, { ...product }]);
  }
  toast(`${qty} ${product[0].name} added to the cart.`);
  };

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
        cartItem,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onadd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContect = () => useContext(Context);
