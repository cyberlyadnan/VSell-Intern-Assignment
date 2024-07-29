import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ props, onRemove }) => {
  // Destructure the item properties
  const { name, image, price, quantity } = props;

  return (
    <div className="flex items-center bg-white p-4 mb-4 shadow rounded-lg">
      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
      />
      <div className="flex flex-row md:flex-row justify-between w-full md:ml-4 ml-4 gap-4">
        <div className="flex flex-col">
          {/* Product Name */}
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            {name}
          </h2>
          {/* Product Price */}
          <p className="text-sm md:text-md text-gray-600">{price}</p>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          {/* Quantity */}
          <label className="mr-2 text-gray-600">Qty:</label>
          <input
            type="number"
            value={quantity || 1} // Default quantity to 1 if not provided
            className="w-12 p-1 border rounded text-center"
            readOnly // Quantity is read-only
          />
        </div>
        <div className="flex justify-center items-center">
          {/* Remove Button */}
          <IconButton
            aria-label="remove"
            onClick={() => onRemove(name)} // Pass name to remove function
            className="text-red-500 hover:text-red-700"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
