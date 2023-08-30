import { client } from "../../../../sanity/lib/client";
import { getClient } from "../../data";
import { Image as IImage } from "sanity";
import { fulldata } from "../../data";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import { resourceUsage } from "process";
import Product from "../../components/Product";

interface IProduct {
  price: string;
  _id: string;
  title: string;
  discription: string;
  image: IImage;
}



export default async function Page({ params }: { params: { id: string } }) {
  const getProducctDetail = async () => {
    const products: IProduct[] = await getClient();
    const newdata = products.find((product) => product._id == params.id);
    return newdata;
  };

  const result:any = await getProducctDetail();
  // console.log(result);

  return (
    <>
     <Product result={result}/>
    </>
  );
}
