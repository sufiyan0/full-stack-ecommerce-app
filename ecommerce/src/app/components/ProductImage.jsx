"use client";
import React, { useState } from "react";
import Image from "next/image";

import { urlForImage } from "../../../sanity/lib/image";

const ProductImage = ({ data }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <Image
            src={urlForImage(data[index]).url()}
            className="product-detail-image"
            alt="ProductImage"
             width={1000}
             height={1000}

          />
        </div>
        <div className="small-images-container">
          {data?.map((item, i) => (
            <Image
              key={i}
              src={urlForImage(item).url()}
              alt="productImage"
              className={
                i === index ? "small-image selected-image" : "small-image"
              }
              onMouseEnter={() => setIndex(i)}
              width={100} height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
