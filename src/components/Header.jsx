import React, { useEffect, useRef, useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import {  useSelector } from 'react-redux'
import logo from "../assets/logo.png"
const Header = () => {
    const[menuOpen,SetMenuOpen]=useState(false)
    const quantity = useSelector((state) => state.cart.totalQuantity)
    const navbarRef = useRef();
    const prevScrollY = useRef(0);
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const isScrollingUp = prevScrollY.current > currentScrollY;
        navbarRef.current.style.transform = isScrollingUp ? 'translateY(00%)' : 'translateY(-100%)';
        prevScrollY.current = currentScrollY;
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
 
  return (
    <>
    <div className='bg-gray-300 py-4 w-full fixed z-10' ref={navbarRef}>

    <div className='container mx-auto flex justify-between items-center'>
        <div className='flex gap-3 font-bold items-center'>
<img src={logo} alt="" className='w-10 h-10'/>
<Link to="/" className='font-semibold tracking-widest '>SHOPSTER</Link>
        </div>

        <div className="list hidden gap-4 items-center font-bold text-gray-500 list-none sm:flex">
          <li className="text-gray-500 font-bold text-xl" ><Link to="/"> Home</Link></li>
          <li className="text-gray-500 font-bold text-xl" ><Link to="/shop"> Shop</Link></li>
       
          
        </div>

        <div className='flex items-center gap-5'>
            <span className='relative'>
              <Link to="/cart">
            <ShoppingCartIcon className='w-7 h-7'/>
            <span className='bg-black rounded-full flex items-center justify-center text-white h-5 w-5 -top-2 -right-2 absolute '>{quantity}</span>
              </Link>
            </span>
         

            <div className='relative inline-block text-left mr-4  sm:hidden' onClick={()=>{SetMenuOpen(!menuOpen)}}>
              {menuOpen?(<XMarkIcon className='w-7 h-7 block'/>):(<Bars3Icon className='w-7 h-7 '/>)}
              {menuOpen && (

<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
<div className="py-1" >
<Link to="/" className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 " role="menuitem">Home</Link>
<Link to="/shop" className="block px-4 py-2 text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Shop</Link>
</div>
</div>
)}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Header