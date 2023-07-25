import React from 'react'
import headerImage from '../assets/hero-img.png';
const CommonSection = ({title}) => {
  return (
    <header 
    className="relative bg-cover bg-center h-[400px] flex items-center justify-center" 
    style={{ backgroundImage: `url(${headerImage})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <h1 className="z-10 text-4xl text-white">{title}</h1>
  </header>
  )
}

export default CommonSection