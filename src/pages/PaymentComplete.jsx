// PaymentComplete.js
import React from 'react';
import { Link } from 'react-router-dom';

const PaymentComplete = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-md">
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="mt-4 text-3xl font-bold text-center">
          Payment Successful
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Thank you for your payment!
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/shop" className="px-4 py-2 bg-green-500 text-white rounded-md">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentComplete;
