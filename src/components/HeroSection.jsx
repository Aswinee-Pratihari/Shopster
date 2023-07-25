import React from 'react';
import HeroImage from '../assets/men6.png'; // replace with the actual path to your image
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate=useNavigate()
  return (
    <div className=" bg-blue-200 py-10">
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center p-8'>

      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl mb-4 font-bold">Welcome to ShopStar!</h1>
        <p className="mb-4">
          One stop destination for all your needs
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={()=>navigate("/shop")}>Shop Now</button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img className="w-1/2 h-full object-cover" src={HeroImage} alt="Hero" />
      </div>
        </div>
    </div>
  );
}

export default HeroSection;
