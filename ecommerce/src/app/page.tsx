// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import React from "react";
import { Product, FooterBanner, HeroBanner } from "./components";
import { client } from "../lib/sanityClient";

const getClientProducts = async () => {
  const res = await client.fetch(`*[_type=='product']`);

  return res;
};
const getClientBanner = async () => {
  const res = await client.fetch(`*[_type=='banner' ]`);

  return res;
};

// export const getServerSideProps = async () => {
//   const query =  `*[_type=='product']`;
//   const products = await client.fetch(query);
//   // const repo = await products.json()
//   // const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await client.fetch(`*[_type == 'banner]`);
//   return {
//     props: { products, bannerData }
//   };
// };

interface productdataint {
  image: { _type: string; asset: [Object] };
  detaildscription: string;
  name: string;
  shortdiscription: string;
  category: string;
  title: string;
  _updatedAt?: string;
  price: number;
  _createdAt?: string;
  _rev?: string;
  _type: string;
  _id: string;
}

export default async function Home() {
  const products = await getClientProducts();
  const bannerData = await getClientBanner();

  return (
    <>
      <HeroBanner bannerData={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variation</p>
      </div>
      <div className="products-container">
        {/* <p>products</p> */}
        {products.map((product: any) => (
          <Product key={product._id} item={product} />
        ))}
      </div>

      <FooterBanner bannerdata={bannerData[0]} />
    </>
  );
}
