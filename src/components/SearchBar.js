import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="flex flex-col items-center font-sans p-4">
      <h1 className="md:text-2xl text-xl font-bold">Find Products</h1>
      <div className="relative mt-4 w-full md:w-7/12 lg:w-8/12">
        <input
          type="text"
          placeholder="Search Store"
          className="border rounded px-4 py-2 w-full pl-10"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
