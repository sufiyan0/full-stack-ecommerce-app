import React from 'react'

const Newsletter = () => {
    return (
        <div>
            <section className='flex flex-col  items-center justify-center max-w-5xl mx-auto h-2/4'>
                <h1 className='text-4xl '>Subscribe Our Newsletter</h1>
                <p>Get the latest information and promo offers directly</p>
                <div className="flex">
                    <input type="email"  />
                    <button  className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-2xl  text-center hover:scale-105 shadow-lg"> Start Shopping</button>
                </div>

            </section>
            
        </div>
    )
}

export default Newsletter
