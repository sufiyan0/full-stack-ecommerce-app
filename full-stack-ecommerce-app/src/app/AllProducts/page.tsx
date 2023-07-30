import React from 'react'
import { client } from '@/lib/sanityClient'
import { Image as IImage } from "sanity"
import Image from "next/image"
import img from '../../../public/event.png'



const getClient = async () => {
    const res = await client.fetch(`*[_type=='product'] {
    price,
    _id,
    title,
    image,
    discription
  }`)

    return res
}
interface IProduct {
    price: string,
    _id: string,
    title: string,
    discription: string,
    image: IImage

}


const page = async () => {
    const data: IProduct[] = await getClient()
  return (
    <div>

    <section className="text-gray-600 body-font mt-24">
        <div className="text-7xl mx-auto items-center justify-center text-start flex mt-8">All Products</div>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {
                    data.map((item) => {

                        return(

                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image alt="ecommerce" className="object-contain object-cover w-full h-full block" src={img} />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.title}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                <p className="mt-1">$ {item.price}</p>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    </section>


</div>
   


  )
}

export default page