import React from "react";
import { Product, FooterBanner, HeroBanner, Footer } from "./components";
import { client } from "../lib/sanityClient";

const getClient = async () => {
  const res = await client.fetch(`*[_type=='product' ]`)

  return res
}

export default async function Home({ products, bannerData }:any) {
  const data:any = await getClient()

  return (

    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variation</p>
      </div>
      
      <div className="products-container">
      
        <p>products</p>
      </div>

      <FooterBanner />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);    

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
