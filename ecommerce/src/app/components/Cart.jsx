"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlForImage } from "../../../sanity/lib/image";

const Cart = () => {
  const useref = useRef();
  const { totalPrice, totalQuantities, cartItem, setShowCart,toggleCartItemQuanitity ,onRemove} =
    useStateContext();
  // console.log(cartItem);
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          className="cart-heading"
          type="button"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your cart</span>
          <span className="cart-num-items">({totalQuantities} item) </span>
        </button>
        {cartItem.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your Shoppin Cart is empty</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItem.length >= 1 &&
            cartItem.map((item, index) => (
              <div className="product" key={item._id}>
                <img
                  src={urlForImage(item?.image[0]).url()}
                  alt={item.desc}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h5>{item.price}</h5>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span className="minus" onClick={ () => toggleCartItemQuanitity( item._id,"dec")}>
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span className="plus" onClick={ () =>  toggleCartItemQuanitity( item._id,"inc")}>
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button type="button" className="remove-item" onClick={() => onRemove(item)}><TiDeleteOutline/></button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItem.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button className="btn" type="button" onClick="">Buy Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
