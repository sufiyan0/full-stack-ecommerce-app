import Link from 'next/link'
import React from 'react'
import { urlForImage } from '../../../sanity/lib/image'
import Image from 'next/image'


const HeroBanner = ({bannerData}:any) => {
    
  return (
    <div className='hero-banner-container'>
        <div className="">
            <p className='beats-solo'>{bannerData.smallText}</p>
            <h3>{bannerData.midText}</h3>
            <Image src={urlForImage(bannerData.image).url()} alt="headphones" className='hero-banner-image' width={1000} height={1000}  />
            <div className="">
                <Link href="#">
                    <button type='button'>{bannerData.buttonText}</button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>{bannerData.desc}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroBanner