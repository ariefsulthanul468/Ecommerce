import React from 'react'
import { Product, HeroBanner, FooterBanner } from '@/components'
import { client } from '@/lib/client'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log("The banner data image is to be", bannerData[0])}
      {/* {console.log(bannerData)} */}
      <div className='products-heading'>
        <h2>Best Selling products</h2>
        <p>Speakers for many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
        {console.log("All Products : ", products)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )



}

export default Home;


export const getServerSideProps = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)
  return {
    props: { products, bannerData }
  }
}