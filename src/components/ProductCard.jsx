import React from 'react'
import img from '../assets/men6.png'
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'
const ProductCard = ({item}) => {
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    e.preventDefault()
    dispatch(addItem(item))
    toast.success(`${item?.productName} added to cart`)
  }
  return (
  <>
  {item && (
    <div className='  cursor-pointer relative'>
      
     <div className="img overflow-hidden h-auto ">
  <img  className=' hover:scale-90 object-cover duration-200 rounded-lg  mx-auto w-[250px]' src={item.imgUrl}/>
     </div>
 <div className="content space-y-2 py-4">
 {/* <span className='text-sm text-red-400 tracking-[6px]'>{item?.category}</span> */}
 <h2 className='text-2xl text-gray-800 font-semibold lowercase'>{item.productName}</h2>
 {/* <p  className='text-lg text-gray-600 font-medium capitalize '>{item.description?.length>10?`${item.description?.slice(0,27)}...`:item.description}</p> */}
 <p  className='text-lg text-gray-600 font-medium capitalize '>{item.category}</p>
 <div className="flex justify-between items-center">
 <span className='text-lg font-medium'>${item.price}</span>
 <PlusCircleIcon className='w-6 h-6 hover:scale-110' onClick={handleChange}/>

 </div>
 </div>
 </div>
  )}
  </>


//     

  )
}

export default ProductCard