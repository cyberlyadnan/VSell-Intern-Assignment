import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'react-toastify';  // Import toastify functions

const ShopItem = ({ props }) => {
  const { name, image, price, oldPrice, description } = props;

  const handleAddToCart = () => {
    // Add item to local storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(props);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show toast message
    toast.success('Item added to cart!');
  };

  const handleAddToFavorites = () => {
    // Add item to local storage
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    favoriteItems.push(props);
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    
    // Show toast message
    toast.success('Item added to favorites!');
  };

  return (
    <div
      className="flex flex-col items-center bg-white rounded-2xl shadow-xl overflow-hidden mx-2 my-4"
    >
      <div
        className="h-36 w-full"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      <div className="p-2 pb-3 sm:p-6 w-full">
        <p className="font-bold text-gray-700 text-base sm:text-xl md:text-xl leading-tight sm:leading-snug text-center">
          {name}
        </p>
        <div className="flex justify-center items-center">
          {oldPrice && (
            <p className="text-gray-400 text-sm sm:text-md line-through mr-2">
              {oldPrice}
            </p>
          )}
          <p className="text-base sm:text-lg font-bold text-green-600">
            {price}
          </p>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center mb-1">
          {description}
        </p>
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center mt-2 w-full px-4 py-1 sm:px-4 sm:py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80"
        >
          <ShoppingCartIcon className="mr-2" /> Add to Cart
        </button> 
        <button
          onClick={handleAddToFavorites}
          className="flex items-center justify-center mt-2 w-full px-3 py-1 sm:px-4 sm:py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80"
        >
          <FavoriteIcon className="mr-2" /> Favorite
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
