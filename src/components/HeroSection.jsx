import React from 'react';
import HeroImage from '../assets/men6.png'; // replace with the actual path to your image

function HeroSection() {
  return (
    <div className=" bg-blue-200 ">
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center p-8'>

      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl mb-4 font-bold">Welcome to Our Site!</h1>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt dolor sit amet hendrerit.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Learn More</button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img className="w-1/2 h-full object-cover" src={HeroImage} alt="Hero" />
      </div>
        </div>
    </div>
  );
}

export default HeroSection;
