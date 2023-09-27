import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlForImage } from '../../../sanity/lib/image'
// : {image,name,slug,price}

const Product = ({item}:any) => {




  // console.log(image[0]) 
  // console.log(item.slug)

  return (
    <div>
      <Link href={`/product/'${item.slug.current}'`}>
        <div className="product-card">
        
          <img src={urlForImage(item.image && item.image[0]).url()} alt={item.image}  width={250} height={250} className='product-image'/> 
          <p className='product-name'>{item.name}</p>
          <p className='product-price'>${item.price}</p>


          

        </div>
      </Link>


    </div>
  )
}

export default Product