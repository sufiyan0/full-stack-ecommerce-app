import React from 'react'
import {Product} from './index'

const Allproduct = ({product}:any) => {

  return (
      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {product.map((prod:any) => (
                <Product key={prod._id} product={prod} />
                // console.log(prod)
              ))}
            </div>
          </div>
      </div> 
  )
}

export default Allproduct