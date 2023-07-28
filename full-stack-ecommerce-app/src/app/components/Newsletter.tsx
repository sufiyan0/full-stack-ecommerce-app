import React from 'react'
import Image from 'next/image'
import img from '../../../public/event.png'

const Newsletter = () => {
    return (
        <div>

            <section className='flex flex-col items-center justify-center mx-auto h-[60vh] bg-slate-50 w-full ' >
                <h1 className=''>Unique and Authentic Vintage Designer Jewellery</h1>
                <div className="flex mx-auto items-center justify-center flex-col lg:flex-row  ">
                    <div className=" flex relative flex-wrap items-center justify-between max-w-[600px] ">
                        <div className="absolute opacity-10 text-9xl -z-0  "><p>Different From Others</p></div>
                        <div className="flex flex-col  py-10">
                            <h2 className='text-lg font-bold my-2'>Using Good Quality Materials</h2>
                            <p className='max-w-[300px] text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex flex-col  py-10">
                            <h2 className='text-lg font-bold my-2'>100% Handmade Products</h2>
                            <p className='max-w-[300px] text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex flex-col py-10">
                            <h2 className='text-lg font-bold my-2'>Modern Fashion Design</h2>
                            <p className='max-w-[300px] text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="flex flex-col py-10">
                            <h2 className='text-lg font-bold my-2'>Discount for Bulk Orders</h2>
                            <p className='max-w-[300px] text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>


                    </div>

                    <div className="flex">
                        <Image src={img} alt='logo' />
                        <div className="mx-4">
                            <p className='max-w-sm '>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <button className="inline-flex  text-white bg-black border-0 py-2 px-6 mt-3 focus:outline-none hover:bg-gray-900 rounded text-md  text-center hover:scale-105 shadow-lg">See All Products</button>
                        </div>

                    </div>
                </div>


            </section>








            <section className='flex flex-col  items-center justify-center max-w-5xl mx-auto h-[50vh]'>
                <div className="absolute text-gray-400 text-9xl font-bold opacity-20">
                    <h2>Newsletter</h2>
                </div>
                <div className="relative">
                    <h1 className='text-4xl font-bold my-3 '>Subscribe Our Newsletter</h1>
                    <p className='text-lg my-3'>Get the latest information and promo offers directly</p>
                    <div className="flex my-4">
                        <input type="email" className='border text-md text-left px-3 mx-2 outline-none text-black bg-transparent ' placeholder='Enter Your Email' />
                        <button className="inline-flex ml-4  text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-md  text-center hover:scale-105 shadow-lg">Get Started</button>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Newsletter
