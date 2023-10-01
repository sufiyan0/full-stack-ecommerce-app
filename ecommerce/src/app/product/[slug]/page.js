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
import ProductQty from "@/app/components/ProductQty";
import ProductImage from "@/app/components/ProductImage";

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
  // const [index,setIndex] = useState(0);

  const data = await getproductdata(slug);
  const product = await getAllproducts();
  
  return (
    <div>
      {/* {console.log(data[0].image)} */}
      <div className="product-detail-container">
        <div>
          <ProductImage data={data[0].image}/>
         
        </div>

        <div className="product-detail-desc">
          <h1>{data[0].name}</h1>
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
          <div className="">
            <ProductQty product={data} />
          </div>
         
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {product.map((prod) => (
              <Product key={prod._id} item={prod} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug }}) => {
  console.log(slug)
  const query = `*[_type == "product" && slug.current == ${slug}]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product, },
  }
}



export default page;
