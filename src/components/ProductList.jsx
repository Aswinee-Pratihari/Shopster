import React from 'react'
import ProductCard from './ProductCard'
import products from '../data/product'
import { Link } from 'react-router-dom'

const ProductList = ({product}) => {
  return (
    <main className=' grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border px-0 md:px-8 gap-2 md:gap-5 xs:grid-cols-2 mx-10 xs:mx-0 '>
    {
     product?.map((item)=>(
        <Link  to={`/shop/${item.id}`} key={item.id}>
          
          <ProductCard  item={item}/>
        </Link>
        )
        // console.log(item)
        )
    }
  
  </main>
  )
}

export default ProductList
