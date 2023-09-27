import { client } from "@/lib/sanityClient";
import React from "react";
import { urlForImage } from "../../../../sanity/lib/image";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import Product from "../../components/Product";
import Allproduct from "@/app/components/Allproduct";

const getproductdata = async (slug) => {
  const query = `*[_type == 'product' && slug.current == ${slug}]`;
  const product = await client.fetch(query);
  return product;
};
const getAllproducts = async () => {
  const query = `*[_type == 'product']`;
  const product = await client.fetch(query);
  return product;
};

const page = async ({ params: { slug } }) => {
  const data = await getproductdata(slug);

  const products = await getAllproducts();
  console.log(products)
  return (
    <>
      <div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img
                src={urlForImage(data[0].image[0]).url()}
                className="product-detail-image"
              />
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{data.name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h4>Details: </h4>
            <p>{data[0].detaildscription}</p>
            <p className="price">${data[0].price}</p>
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus">
                  <AiOutlineMinus />
                </span>
                <span className="num">0</span>
                <span className="plus">
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button type="button" className="add-to-cart">
                Add to Cart
              </button>
              <button type="button" className="buy-now">
                Buy Now
              </button>
            </div>
          </div>
        </div>

       <div className="">
        <Allproduct product={products}/>
       </div>
      </div>
    </>
  );
};

export default page;


