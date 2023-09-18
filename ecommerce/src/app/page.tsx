import React from "react"
import {Product, FooterBanner,HeroBanner,Footer} from './components'
export default function Home() {
  return (
    <>
      <HeroBanner/> 
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variation</p>
      </div>   

      <div className="products-container">
        <p>products</p>
      </div>

      <FooterBanner/>
    </>
  )
}
