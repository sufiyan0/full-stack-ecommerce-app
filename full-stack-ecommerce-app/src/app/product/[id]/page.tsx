import { client } from "../../../../sanity/lib/client";
import { getClient } from "../../data";
import { Image as IImage } from "sanity";
import {fulldata} from '../../data'

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
    // console.log(products)
  const newdata = products.find((product) => product._id == params.id);
  // console.log(newdata)
  return newdata;
};
  const result = await getProducctDetail();
  console.log(result);

  return <div className="mt-36">My Post: {params.id}</div>;
}
