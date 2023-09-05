"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Image from "next/image";


interface Product {
  id: number;
  image_url: string;
  product_id: string;
  product_price: number;
  product_quantity: number;
  product_title: string;
  user_id: string;
}



export default  function CartItems() {
  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { isSignedIn, userId } = useAuth();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [price , setPrice] = useState<number>(0)

  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data) 
        console.log(data)
      }
      );
  }, [isSignedIn, state]);




  async function deleteProduct(product_title: any) {

    const res = await fetch("/api/cart", {
      method: "DELETE",
      body: JSON.stringify({
        user_id: userId,
        product_title: product_title,
      }),
    });
    setState(!state);
  }



  return (
    <div className="flex flex-col min-h-screen  mt-16 mx-auto px-36  ">
      <h1 className="flex text-5xl font-bold my-11 justify-center">
        Shoppig Cart
      </h1>
      {isSignedIn ? (
        <div className="flex-col flex lg:flex-row flex-1 items-center justify-between">
          <div className="grid gap-14">
            
            {products?.map((item: any, index: number) => (
              
              <div className="flex" key={index} >
                

                <Image
                  src={item.image_url}
                  alt=""
                  className="w-56 h-56"
                  width={500}
                  height={500}
                />
                <div className="ml-10">
                  <h1 className="text-4xl font-bold"> {item.product_title}</h1>
                  <h1 className="text-2xl font-medium">
                    {" "}
                    ${item.product_price}
                  </h1>
                  <h1 className="text-2xl font-medium">
                    {" "}
                    Quantity {item.product_quantity}
                  </h1>
                  <h1 className="text-2xl font-medium">
                    {" "}
                    Total Price  {item.product_quantity * item.product_price}
                  </h1>

                  <button
                    onClick={() => deleteProduct(item.product_title)}
                    className="bg-black text-white py-1 px-5 rounded-md mt-10 font-semibold"
                  >
                    DELETE
                  </button>
                </div>
                <div className="">
                  
                </div>
                
                {/* {` ${item.product_price * item.product_quantity}`} */}
              </div>
            ))}
          </div>
          <div className="">
            
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl">Please Login First</h2>
        </div>
      )}
    </div>
  );
}
