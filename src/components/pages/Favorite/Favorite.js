import React, { useState, useEffect } from 'react';
import FavoriteItem from './FavoriteItem';
import { toast } from 'react-toastify';

const Favorite = () => {
  const [favoritesItems, setFavoritesItems] = useState([]);

  useEffect(() => {
    // Load favorite items from local storage
    const items = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    setFavoritesItems(items);
  }, []);

  const handleRemove = (name) => {
    const updatedFavorites = favoritesItems.filter(item => item.name !== name);
    setFavoritesItems(updatedFavorites);
    // Update local storage
    localStorage.setItem('favoriteItems', JSON.stringify(updatedFavorites));
    toast.success('Item Removed from Favorite!');

  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-6 pb-12">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-48 p-4 text-white">
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <p className="text-sm">Your favorite items at a glance</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoritesItems.length > 0 ? (
              favoritesItems.map((item) => (
                <FavoriteItem key={item.name} item={item} onRemove={handleRemove} />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No favorite items found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
