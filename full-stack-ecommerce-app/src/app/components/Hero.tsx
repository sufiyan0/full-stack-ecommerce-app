import React from 'react'
import Image from 'next/image'
import img from '../../../public/header.png'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import featured1 from '../../../public/Featured1.png'
import featured2 from '../../../public/Featured2.png'
import featured3 from '../../../public/Featured3.png'
import featured4 from '../../../public/Featured4.png'

const Hero = () => {
    return (
        <div className='flex items-center justify-center min-h-[100vh] '>


            <section className="text-gray-600">
                <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
                    <div className="lg:flex-grow  md:w-1/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 justify-center mx-auto md:mx-0 items-center text-center">
                        <p className='bg-[#E1EDFF] text-[#0000FF]  text-lg px-3 py-1 rounded-lg my-4 '>Sale 70%</p>
                        <h1 className="title-font sm:text-7xl text-5xl  mb-4 font-medium text-gray-900">
                            An Industrial Take on Streetwear

                        </h1>
                        <p className="mb-8 leading-relaxed max-w-lg">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-2xl  text-center hover:scale-105 shadow-lg"><AiOutlineShoppingCart className='mx-2 my-1' /> Start Shopping</button>

                        </div>
                        <div className="flex  my-16 space-x-16">
                            <Image src={featured1} alt='BAZAAR' ></Image>
                            <Image src={featured2} alt='BAZAAR' ></Image>
                            <Image src={featured3} alt='BAZAAR' ></Image>
                            <Image src={featured4} alt='BAZAAR' ></Image>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full  flex-1 ">
                        <div className="flex ">
                            <div className="bg-[#FFECE3] pacity-75 absolute rounded-full -z-0 w-[600px] h-[600px] mt-20  " ></div>
                            <Image className="object-cover mx-16 my-12  rounded relative z-10 w-[500px] h-[650px] " alt="hero" src={img} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero