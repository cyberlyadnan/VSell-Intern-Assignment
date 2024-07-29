import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const FavoriteItem = ({ item, onRemove }) => {
  return (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
      <div className="mt-4 flex justify-between">
        <div>
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">{item.price}</p>
        <p className="text-gray-600">{item.description}</p>
        </div>
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
