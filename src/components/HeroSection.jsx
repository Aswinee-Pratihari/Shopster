import React from 'react';


function HeroSection() {
 
  return (
<header
      className="relative bg-cover bg-center h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)",

      }}
    >

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className='flex items-center justify-center  text-white absolute flex-col space-y-7'>
        <h2 className='text-8xl'>SHOPSTER</h2>
        <h5 className='text-3xl text-slate-300 tracking-wider'>One Stop Destination for Your Shopping</h5>
      </div>


    </header>
  );
}

export default HeroSection;
