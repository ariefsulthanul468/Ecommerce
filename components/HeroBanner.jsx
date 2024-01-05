import { urlFor } from '@/lib/client'
import Link from 'next/link'
import React from 'react'

//  src={urlFor(heroBanner.image)}
// {urlFor(heroBanner.image && heroBanner.image[0])}

const HeroBanner = ({ heroBanner, image }) => {
    return (

        <div className='hero-banner-container'>
            {console.log("heroBanner.image:", heroBanner.image)}

            <div>
                <p className='beats-solo'>{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1>
                {/* <img src={urlFor(heroBanner.image && heroBanner.image[0])} alt='headpones' className='hero-banner-image' /> */}
                <img src={urlFor(heroBanner.image && heroBanner.image.asset._ref).url()} alt="headphones" className="hero-banner-image" />

            </div>
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button type='button'>{heroBanner.buttonText}</button>
                </Link>
            </div>
            <div className='desc'>
                <h5>description</h5>
                <p>{heroBanner.desc}</p>
            </div>
        </div>
    )
}

export default HeroBanner