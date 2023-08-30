"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bill from "./Bill";
export default function CartItems() {
  const [products, setProducts] = useState<any>(null);
  const [state, setState] = useState(false);
  const { isSignedIn, userId } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/api/cart?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
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

  function totalBalance(product:any){
    product.map((price:any) => {
      const pris =  price.product_price;
      


       
    })

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
                    Total {item.product_quantity}
                  </h1>

                  <button
                    onClick={() => deleteProduct(item.product_title)}
                    className="bg-black text-white py-1 px-5 rounded-md mt-10 font-semibold"
                  >
                    DELETE
                  </button>
                </div>
                
              </div>
            ))}
          </div>
          <div className="">

          <Bill product={products} /> 
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
