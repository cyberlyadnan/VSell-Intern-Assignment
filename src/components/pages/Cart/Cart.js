import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  // State to hold the list of cart items
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch items from local storage and update state
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  // Function to handle removing an item from the cart
  const handleRemove = (name) => {
    // Filter out the item to be removed
    const updatedItems = cartItems.filter(item => item.name !== name);
    setCartItems(updatedItems);
    // Update local storage with the new list of items
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  // Function to calculate the total price of items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => 
      total + parseFloat(item.price.replace(/[^0-9.-]+/g, '')), 0
    ).toFixed(2);
  };

  return (
    <div className="p-4 md:p-8 lg:p-12 bg-zinc-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 mt-3 text-center text-gray-800">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="w-full lg:w-3/4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={`${item.name}-${Math.random()}`} props={item} onRemove={handleRemove} />
            ))
          ) : (
            <p className="text-center text-gray-600">Your cart is empty</p>
          )}
        </div>
        {/* Cart Summary */}
        <div className="w-full lg:w-1/4 p-6 bg-white rounded-lg shadow-lg mb-20">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Summary</h2>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal</span>
            <span>{calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Tax</span>
            <span>{(calculateTotal() * 0.1).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 text-gray-800 font-semibold">
            <span>Total</span>
            <span>{(calculateTotal() * 1.1).toFixed(2)}</span>
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
