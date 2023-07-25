import React from 'react'
import TabName from '../components/TabName'
import CommonSection from '../components/CommonSection'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart, removeItem } from '../redux/cartSlice'

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItem)
    const totalPrice=useSelector((state=>state.cart.totalAmount))
    const dispatch=useDispatch()
  return (
    <TabName title="Cart">
<CommonSection title="MY CART"/>
{cartItems.length!=0?(


<div className="container mx-auto mt-10">
      <h1 className="my-5 text-2xl font-bold">Shopping Cart</h1>
      <div className="flex flex-wrap bg-blue-100 px-2 py-4 mb-4">
      <span className="w-2/12 px-2 font-semibold">Product</span>
        <span className="w-3/12 px-2 font-semibold">Name</span>
        <span className="w-2/12 px-2 font-semibold">Quantity</span>
        <span className="w-2/12 px-2 font-semibold">Price</span>
        <span className="w-2/12 px-2 font-semibold">Total</span>
        
      </div>
      {cartItems.map(item => (
        <div key={item.id} className="flex flex-wrap items-center border-b-2 border-gray-200 px-2 py-4">
          <img className="w-2/12 px-2" src={item.imgUrl} alt={item.productName} />
          <span className="w-3/12 px-2">{item.productName}</span>
          <span className="w-2/12 px-2">{item.quantity}</span>
          <span className="w-2/12 px-2">${item.price}</span>
          <span className="w-2/12 px-2">${item.quantity * item.price}</span>
        <button className="w-1/12 px-2 bg-red-500 text-white rounded-md h-10" onClick={() => dispatch(removeItem(item))}>Delete</button>
          
        </div>
      ))}
      <div className="flex flex-wrap justify-between mt-6 pt-6 border-t-2 px-2 py-4">
        <span className="w-8/12 px-2 font-semibold text-xl">Total</span>
        <span className="w-4/12 px-2 text-gray-600 font-semibold">${totalPrice}</span>
      </div>
      <div className="flex justify-end mt-6">
        <button className="mx-2 px-4 py-2 bg-green-500 text-white rounded-md"><Link to={"/shop"}> Continue Shopping</Link></button>
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-md"><Link to={"/checkout"}> Checkout</Link></button>
        <button className="mx-2 px-4 py-2 bg-red-500 text-white rounded-md" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
):(
  <h4 className='text-2xl font-bold text-center my-7'>No Product in cart</h4>
)}
    </TabName>
  )
}

export default Cart
