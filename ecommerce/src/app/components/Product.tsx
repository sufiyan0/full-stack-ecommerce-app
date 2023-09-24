import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
// : {image,name,slug,price}

const Product = ({item : {image,name,slug,price} }:any) => {




  // console.log(image[0]) 
  return (
    <div>
      <Link href={`/product/`}>
        <div className="product-card">
        
          <img src={urlForImage(image && image[0]).url()} alt={image}  width={250} height={250} className='product-image'/> 
          <p className='product-name'>{name}</p>
          <p className='product-price'>${price}</p>


          

        </div>
      </Link>


    </div>
  )
}

export default Product