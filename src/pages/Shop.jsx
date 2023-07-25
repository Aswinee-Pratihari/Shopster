import React, { useState } from 'react'
import CommonSection from '../components/CommonSection'
import TabName from '../components/TabName'
import products from '../data/product'
import ProductList from '../components/ProductList'

const Shop = () => {
  const [Product, SetProducts] = useState(products)
  // const[filterProduct,setFilterProduct]=useState([])
  const handleFilters = (e) => {
    const val = e.target.value
    console.log(val)
    if (val == "sofa") {
      const filteredProducts = products.filter(item => item.category === "sofa")
      SetProducts(filteredProducts)
    }
    if (val == "chair") {
      const filteredProducts = products.filter(item => item.category === "chair")
      SetProducts(filteredProducts)
    }
    if (val == "mobile") {
      const filteredProducts = products.filter(item => item.category === "mobile")
      SetProducts(filteredProducts)
    }
    if (val == "watch") {
      const filteredProducts = products.filter(item => item.category === "watch")
      SetProducts(filteredProducts)
    }
    if (val == "wireless") {
      const filteredProducts = products.filter(item => item.category === "wireless")
      SetProducts(filteredProducts)
    }
   
  }
  const handleSearch=(e)=>{
    // const filterProducts=products.filter(item=>item?.productName?.toLowerCase()==e?.target?.value?.toLowerCase())
    const filterProducts=products.filter(item=>(item.productName.toLowerCase().includes(e.target.value.toLowerCase())))
    
    SetProducts(filterProducts)
  }
const handleSort=(e)=>{
 
  const val=e.target.value
  if(val=="asc"){
    const filteredProducts = products.sort((a,b)=>a.price-b.price)
    SetProducts(filteredProducts)
  }
  if(val=="desc"){
    const filteredProducts = products.sort((a,b)=>b.price-a.price)
    SetProducts(filteredProducts)
  }
}
  return (
    <>
      <TabName title="shop">
        <CommonSection title="MY PRODUCTS" />
        <div className='container mx-auto'>

        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 p-4">
          {/* Filter Section */}
          <div className="flex flex-col ">
            <select id="filter" onChange={handleFilters} className=" text-white  font-semibold tracking-widest p-3 rounded bg-orange-900">
              <option>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="chair">Chair</option>
              <option value="mobile">Mobile</option>
              <option value="watch">Watches</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>

          {/* Sort Section */}
          <div className="flex flex-col">
            <select id="sort" className="text-white font-semibold tracking-widest p-3 rounded bg-orange-900" onChange={handleSort}>
              <option>Sort by Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          {/* Search Section */}
          <div className="flex flex-col ">
            <input id="search" type="text" className="p-3 border-gray-500   border  rounded" placeholder="Search..." onChange={handleSearch}/>
          </div>
        </div>

        <div className="products">
          {Product.length === 0 ? (<h1>No Product Found</h1>) : (
            <ProductList product={Product} />
          )}
        </div>
      </TabName>

    </>
  )
}

export default Shop