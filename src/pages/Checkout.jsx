import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import TabName from '../components/TabName';
import CommonSection from '../components/CommonSection';
import { Link } from 'react-router-dom';


const Checkout = () => {
const cartState = useSelector(state => state.cart);
const totalQuantity=cartState?.totalQuantity;
// console.log(cartState)
const totalAmount=cartState?.totalAmount
const shippingPrice=20

  return (
    <TabName title="Checkout Page">
<CommonSection title="CheckOut Page"/>
<div className="container mx-auto">

    <div className="flex justify-center mt-10 flex-col sm:flex-row items-center space-y-7">
    <div className="w-1/2 ml-4 p-8 border border-gray-200 rounded-lg shadow-lg bg-gray-50">
    <h2 className="mb-8 text-2xl font-bold text-gray-700">Order Summary</h2>
    <div className="flex justify-between mb-2">
        <span className="text-gray-600">Total items:</span>
        <span className="font-semibold">{totalQuantity}</span>
    </div>
    <div className="flex justify-between mb-2">
        <span className="text-gray-600">Total amount:</span>
        <span className="font-semibold">${totalAmount.toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-2">
        <span className="text-gray-600">Shipping:</span>
        <span className="font-semibold">${shippingPrice.toFixed(2)}</span>
    </div>
    <div className="border-t border-gray-300 pt-4 flex justify-between">
        <span className="text-gray-700 font-semibold">Total to pay:</span>
        <span className="text-gray-700 font-semibold">${(totalAmount + shippingPrice).toFixed(2)}</span>
    </div>
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md"><Link to={"/complete"}>Checkout</Link></button>
</div>

</div>
</div>
    </TabName>
);
}

export default Checkout