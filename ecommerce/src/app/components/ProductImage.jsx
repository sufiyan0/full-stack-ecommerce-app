"use client";
import React, { useState } from "react";

import { urlForImage } from "../../../sanity/lib/image";

const ProductImage = ({ data }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img
            src={urlForImage(data[index]).url()}
            className="product-detail-image"
          />
        </div>
        <div className="small-images-container">
          {data?.map((item, i) => (
            <img
              key={i}
              src={urlForImage(item).url()}
              className={
                i === index ? "small-image selected-image" : "small-image"
              }
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
