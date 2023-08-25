import { client } from "../../../../sanity/lib/client";
import { getClient } from "../../AllProducts/page";
import { Image as IImage } from "sanity";

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
  //   console.log(products)
  const newdata = products.filter((product) => product._id == params.id);
  console.log(newdata)
  return newdata;
};
  const result = getProducctDetail();
  console.log(result);

  return <div className="mt-36">My Post: {params.id}</div>;
}
