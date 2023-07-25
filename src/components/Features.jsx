import { CreditCardIcon, CurrencyRupeeIcon, MapIcon, PhoneIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Features = () => {
  return (
    <>
        <div className=' grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-3 py-12'>

        <div className='flex gap-3'>
            <MapIcon className='w-14 h-14'/>
            <div>
                <h4>Free Shipping</h4>
                <span className='text-gray-300'>Free Shipping for orders over £130.</span>
            </div>
        </div>
        <div className='flex gap-3'>
            <CurrencyRupeeIcon className='w-14 h-14'/>
            <div>
                <h4>MoneyBack Guarentee</h4>
                <span className='text-gray-300'>Free Shipping for orders over £130.</span>
            </div>
        </div>
        <div className='flex gap-3'>
            <PhoneIcon className='w-14 h-14'/>
            <div>
                <h4>24*7 Support</h4>
                <span className='text-gray-300'>Free Shipping for orders over £130.</span>
            </div>
        </div>
        <div className='flex gap-3'>
            <CreditCardIcon className='w-14 h-14'/>
            <div>
                <h4>Flexible payment</h4>
                <span className='text-gray-300'>Free Shipping for orders over £130.</span>
            </div>
        </div>
        </div>
    </>
  )
}

export default Features