import React from 'react';
import { cartItems } from '../../utils/constants';
import CartItem from './CartItem';

// Sample demo data

const Cart = () => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4">
          {cartItems.map((props,index) => (
            <CartItem key={index} props={props}/>
          ))}
        </div>
        <div className="w-full lg:w-1/4 p-6 bg-white rounded-lg shadow-lg mb-20">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Summary</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>${calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Tax</span>
            <span>${(calculateTotal() * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-800 font-semibold">
            <span>Total</span>
            <span>${(calculateTotal() * 1.1).toFixed(2)}</span>
          </div>
          <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
