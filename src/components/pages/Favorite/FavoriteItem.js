import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FavoriteItem = ({ item, onRemove }) => {
  return (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      {/* Image of the favorite item */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      {/* Details and remove button section */}
      <div className="mt-4 flex justify-between">
        <div>
          {/* Item name */}
          <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          {/* Item price */}
          <p className="text-gray-600">{item.price}</p>
          {/* Item description */}
          <p className="text-gray-600">{item.description}</p>
        </div>
        {/* Button to remove the item from favorites */}
        <IconButton
          aria-label="remove"
          onClick={() => onRemove(item.name)}
          className="mt-2 bg-red-500 text-white py-1 px-3 rounded"
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FavoriteItem;
