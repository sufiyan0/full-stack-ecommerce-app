"use client";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContect } from "../context/StateContext";
import product from "../../../sanity/product";

const Allproduct = ({product}:any) => {
  const { decQty, incQty, qty,onadd,cartItem } = useStateContect();
 
  return (
    <div className="">
      <div className="quantity">
        <h3>Quantity:</h3>
        <p className="quantity-desc">
          <span className="minus" onClick={decQty}>
            <AiOutlineMinus />
          </span>
          <span className="num">{qty}</span>
          <span className="plus" onClick={incQty}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <div className="buttons">
        <button type="button" className="add-to-cart" onClick={() =>  onadd(product,qty)}>
          Add to Cart
        </button>
        <button type="button" className="buy-now">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Allproduct;
