import React from 'react';

function Footer() {
  return (
    <footer className="bg-green-700 py-10 px-5 mt-10">
      <div className="container mx-auto">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Categories</h3>
          <ul className="mt-4 font-semibold text-xl text-gray-500">
            <li><a className="text-white hover:text-blue-300" href="#link1">Phone</a></li>
            <li><a className="text-white hover:text-blue-300" href="#link2">Watches</a></li>
            <li><a className="text-white hover:text-blue-300" href="#link3">Sofas</a></li>
            <li><a className="text-white hover:text-blue-300" href="#link2">Chairs</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Useful Links</h3>
          <ul className="mt-4">
            <li><a className="text-white hover:text-blue-300" href="#link4">Shop</a></li>
            <li><a className="text-white hover:text-blue-300" href="#link5">About</a></li>
            <li><a className="text-white hover:text-blue-300" href="#link6">Cart</a></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Contact Details</h3>
          <p className="mt-4 text-white">123, Main Street, Your City, Your State, 12345</p>
          <p className="mt-2 text-white">Phone: (123) 456-7890</p>
          <p className="mt-2 text-white">Email: info@example.com</p>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
