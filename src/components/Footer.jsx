import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 h-full text-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Shopster. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;