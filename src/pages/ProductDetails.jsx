import React, { useEffect, useRef, useState } from 'react'
import TabName from '../components/TabName'
import { useParams } from 'react-router-dom'
import products from '../data/product'
import CommonSection from '../components/CommonSection'
import { Bars3Icon,HeartIcon, XMarkIcon } from '@heroicons/react/24/solid'
import StarRatings from 'react-star-ratings'
import ProductList from '../components/ProductList'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'
import { toast } from 'react-hot-toast'
const ProductDetails = () => {
  const MsgRef=useRef("")
  const TitleRef=useRef("")
  const {id}=useParams()
  const [Similarproduct,setSimilarProduct]=useState([])
  const product=products.find(item=>item.id==id)
  const dispatch=useDispatch()
  useEffect(()=>{
const filteredProducts=products.filter(item=>item.category==product.category)
const relatedProducts=filteredProducts.filter(item=>item.id!=product.id)  //this excluded the product we are viewing as main product
setSimilarProduct(relatedProducts)
window.scrollTo(0,0)
  },[product])
  const [rating, setRating] = useState(1);
  const handleReview=(e)=>{
    const val=e.target.value
    if(val=='Rating'){
      setRating(1)
    }
    else{
      setRating(val)
    }
    // console.log(review)
  }
  const handleSubmit=(e)=>{
e.preventDefault()
// alert("jjj")
const reviewTitle=TitleRef?.current?.value
const reviewMsg=MsgRef?.current?.value
const review={
  Title:reviewTitle,
  msg:reviewMsg,
  rating:rating
}
toast.success("review submitted")
console.log(review)
// console.log(TitleRef)
  }
const[tabs,setTabs]=useState('desc')
const handleTabs=(e)=>{
setTabs(e.target.value)
}

const AddToCart=()=>{
  dispatch(addItem(product))
  toast.success(`${product.productName} added to cart`)
}
// console.log(product.productName)
  return (
    <>
    <TabName title={product.productName}>
<CommonSection title={product.productName}/>
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container  py-10 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center">
      <img alt="ecommerce" className="lg:w-1/2 w-2/3 lg:h-auto  object-cover object-center rounded" src={`${product.imgUrl}`}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Category {product.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.productName}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
          <StarRatings
          rating={product.avgRating}
          starRatedColor="gold"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="2px"
        />
            <span className="text-gray-600 ml-3">{product?.avgRating} Rating</span>
          </span>
    
        </div>
        <p className="leading-relaxed my-4">{product?.shortDesc}</p>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${product?.price}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={AddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>

    <div>
      <div className="buttons space-x-6 font-semibold text-lg ">
        <button className={` border-b-black border-t-0 border-x-0 ${tabs=="desc"?("text-black font-bold border-2"):("text-gray-500 font-normal")}`}value="desc" onClick={handleTabs}>Description</button>
        <button className={` border-b-black border-t-0 border-x-0 ${tabs=="review"?("text-black font-bold border-2"):("text-gray-500 font-normal")}`} value="review" onClick={handleTabs}>Reviews {product.reviews.length}</button>
      </div>

<div className='mt-5'>

      {tabs=="desc"?(<>
        <p className='leading-relaxed  font-gray-600'>{product.description}</p>
      </>):(<>
      {
        product.reviews.map((review,index)=>(
          <div key={index}>
          <h4 className='font-bold text-lg mt-5'>⭐{review.rating} rating</h4>
          <p className='text-gray-600 leading-loose'>{review.text}</p>
       
          </div>
        ))
      }
<div className=' text-center'>
  <form action="" onSubmit={handleSubmit}>
    <h3 className='text-xl font-bold tracking-widest'>Leave A Review</h3>
    <div className='mx-auto space-y-6 my-4'>
    <input type="text" name="" id="" placeholder='Enter the Title' className='w-2/3 px-3 py-2 border-2 border-gray-600 rounded-lg' ref={TitleRef}/>

<div>

    <select id="filter" className=" text-white  font-semibold tracking-widest p-3 rounded bg-emerald-700" onChange={handleReview} >
              <option>Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
</div>

    <textarea type="text" name="" id="" placeholder='Enter your feedback' className='w-2/3 min-h-[100px] px-3 py-2 border-2 border-gray-600 rounded-lg' ref={MsgRef}/>
    </div>

<button className='bg-gray-600 px-6 font-bold tracking-widest py-2 rounded-lg text-white' type='Submit'>Submit</button>
  </form>
</div>

      </>)}
</div>
    </div>

    <div className='my-6'>
      <h4 className='font-extrabold text-2xl my-5 '>You might Also Like</h4>
      <ProductList product={Similarproduct}/>
    </div>
  </div>
</section>
     </TabName>
    </>
  )
}

export default ProductDetails
