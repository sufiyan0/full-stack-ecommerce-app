import { client } from "../../sanity/lib/client"
import { Image as IImage } from "sanity";

export const getClient = async () => {
    const res = await client.fetch(`*[_type=='product'] {
    price,
    _id,
    title,
    image,
    discription
  }`)

    return res
}

export const  fulldata = async () => {

    const data= await getClient()
    return data
}


interface IProduct {
    price: string,
    _id: string,
    title: string,
    discription: string,
    image: IImage

}