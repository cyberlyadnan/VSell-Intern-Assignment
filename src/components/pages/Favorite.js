import React from 'react';
import { favoritesItems } from '../../utils/constants';
import FavoriteItem from './FavoriteItem';

const Favorite = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-48 p-4 text-white">
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <p className="text-sm">Your favorite items at a glance</p>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoritesItems.map((item,index) => (
              <FavoriteItem key={index}  item={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
