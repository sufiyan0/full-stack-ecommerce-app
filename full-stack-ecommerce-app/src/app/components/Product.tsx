"use client";
import React, { useState,useEffect } from "react";
import { Image as IImage } from "sanity";
// import { fulldata } from "../../data";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { useAuth } from "@clerk/nextjs";


const Product = ({ result }: any) => {
  const {userId} = useAuth();
  const [quantity, setQuantity] = useState(1);
  const { isSignedIn } = useAuth();
  
  function addQuantity() {
    setQuantity(quantity + 1);
  }
  function subQuantity() {
    setQuantity(quantity - 1);
  }
  
  async function handleAddToCart() {
   
    if(isSignedIn)
   {

     try {
       const res = await fetch("/api/cart", {
         method: "POST",
         body: JSON.stringify({
           user_id: userId,
           product_id: result._id,
           product_title: result.title,
           product_price: result.price * quantity,
           product_quantity: quantity,
           image_url: urlForImage(result.image).url(),
          }),
        });
      } catch (error) {
        console.log("error", error);
      }
    } else{

      alert("Please Signin first")
    }
   

  }

  return (
    <section className="text-gray-600 body-font overflow-hidden min-h-screen mt-32">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={urlForImage(result.image).url()}
            width={400}
            height={200}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {result.title}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {result.title}
            </h1>
            <p className="leading-relaxed">{result.discription}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <button
                    onClick={() => subQuantity()}
                    disabled={quantity == 1}
                    className="rounded border appearance-none border-gray-300 px-2 mx-2  text-2xl  "
                  >
                    -
                  </button>
                  <span className="text-2xl mx-2 font-bold ">{quantity}</span>
                  <button
                    onClick={() => addQuantity()}
                    disabled={quantity == 8}
                    className="rounded border appearance-none border-gray-300 px-2 mx-2 text-2xl  "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {result.price}
              </span>
              <button  onClick={handleAddToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
