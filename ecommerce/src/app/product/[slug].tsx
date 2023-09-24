import React from 'react'
import { client } from '../../../sanity/lib/client';

const  Productdetail = ({props: [slug]}:any) => {
  return (
    <div> 
        {`${slug}`}
        <div className="">product</div>
    </div>
  )
}


export const getStaticProps = async () => {
  const query =  `*[_type=='product' && ]`;
  const products = await client.fetch(query);
  // const repo = await products.json()    
  // const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(`*[_type == 'banner]`);
  return {
    props: { products, bannerData }
  };
};

export default  Productdetail