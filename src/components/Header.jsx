import React, { useEffect, useRef, useState } from 'react'
import { BeakerIcon, HeartIcon, ShoppingBagIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import useAuth from '../utils/useAuth'
import { logout } from '../redux/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase.config'
const Header = () => {
    const[clicked,SetClicked]=useState(false)
    const[menuOpen,SetMenuOpen]=useState(false)
    const quantity = useSelector((state) => state.cart.totalQuantity)
    const navbarRef = useRef();
    const prevScrollY = useRef(0);
    // const dispatch=useDispatch()
    // const {currentUser}=useAuth()
    // const handleSignOut=(e)=>{
    //   alert("jjj")
    //   e.preventDefault()
    //   signOut(auth)
    //   dispatch(logout())
    // }
    // console.log(currentUser)  //getting undefined over here
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
<ShoppingBagIcon className='w-10 h-10'/>
<h1 className='font-semibold tracking-widest '>SHOPIFY</h1>
        </div>

        <div className="list hidden gap-4 items-center font-bold text-gray-500 list-none sm:flex">
          <li className="text-gray-500 font-bold" ><Link to="/"> Home</Link></li>
          <li className="text-gray-500 font-bold" ><Link to="/shop"> Shop</Link></li>
          <li className="text-gray-500 font-bold"><Link to="/"> About</Link></li>
            {/* {links?.map((item,index)=>(

            // <li className={`bg-${item.selected==1?("red-400"):("gray-200")}`} key={item.index}><Link to={`${item.path}`}> {item?.name}</Link></li>
            ))} */}
        </div>

        <div className='flex items-center gap-5'>
            <span className='relative'>
              <Link to="/cart">
            <ShoppingCartIcon className='w-7 h-7'/>
            <span className='bg-black rounded-full flex items-center justify-center text-white h-5 w-5 -top-2 -right-2 absolute '>{quantity}</span>
              </Link>
            </span>
            <span className='relative'>
            <HeartIcon className='w-7 h-7'/>
            <span className='bg-black rounded-full flex items-center justify-center text-white h-5 w-5 -top-2 -right-2 absolute '>0</span>
            </span>
{/*           
            <div className='relative inline-block text-left'>

            <img src={currentUser?currentUser.photoURL:""} alt="" className='w-7 h-7 rounded-full object-cover hover:cursor-pointer' onClick={()=>SetClicked(!clicked)}/>
            
            {clicked && (

            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" >
      <li href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Your Profile</li>
      <li href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Settings</li>
      <li href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Sign out</li>
    </div>
  </div>
            )}
            </div> */}

            <div className='relative inline-block text-left mr-4  sm:hidden' onClick={()=>{SetMenuOpen(!menuOpen)}}>
              {menuOpen?(<XMarkIcon className='w-7 h-7 block'/>):(<Bars3Icon className='w-7 h-7 '/>)}
              {menuOpen && (

<div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
<div className="py-1" >
<Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Home</Link>
<Link to="/shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Shop</Link>
<Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-900 hover:text-gray-900 cursor-pointer" role="menuitem" > About</Link>
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