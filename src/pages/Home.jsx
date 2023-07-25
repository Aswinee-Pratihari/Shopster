import React, { useEffect, useState } from 'react'
import TabName from '../components/TabName'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import ProductList from '../components/ProductList'
import products from '../data/product.js'

const Home = () => {
  const year = new Date().getFullYear()
  // console.log(year)
  const [Trendingproduct, setTrendingProduct] = useState(products)
  const [BestSellingproduct, setBestSellingroduct] = useState([])
  const [watches, setWatches] = useState([])
  const [phones, setPhones] = useState([])
  useEffect(() => {
    const filteredTrendingProducts = products.filter(item => item.category === "sofa")
    const filteredTBestSellerProducts = products.filter(item => item.category === "chair")
    const WatchProduct = products.filter(item => item.category === "watch")
    const phones = products.filter(item => item.category === "mobile")
    setTrendingProduct(filteredTrendingProducts)
    setBestSellingroduct(filteredTBestSellerProducts)
    setWatches(WatchProduct)
    setPhones(phones)
  }, [])

  return (
    <>
      <TabName title={"Home"}>
        <div>
          <HeroSection />
          <div className="container mx-auto">
            <Features />
            <div className='my-4'>

              <h2 className="heading text-center font-bold tracking-widest text-2xl  my-6 ">
                Trending Products
              </h2>
              <ProductList product={Trendingproduct} />
            </div>

            <div className='my-4'>

              <h2 className="heading text-center font-bold tracking-widest text-2xl my-6 ">
                Best Selling Products
              </h2>
              <ProductList product={BestSellingproduct} />
            </div>

            <div className='my-4'>
              <h2 className="heading text-center font-bold tracking-widest text-2xl my-6 ">
                Have a good Time by wearing our Watches 
              </h2>
              <ProductList product={watches} />
            </div>

            <div className='my-4'>
              <h2 className="heading text-center font-bold tracking-widest text-2xl my-6 ">
                Smart Phones
              </h2>
              <ProductList product={phones} />
            </div>
          </div>
          
        </div>
      </TabName>
    </>
  )
}

export default Home
