import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
// : {image,name,slug,price}

const Product = ({ item }: any) => {
  return (
    <div>
      <Link href={`/product/'${item.slug.current}'`}>
        <div className="product-card">
          <Image
            src={urlForImage(item.image && item.image[0]).url()}
            alt={item.desc}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{item.name}</p>
          <p className="product-price">${item.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
