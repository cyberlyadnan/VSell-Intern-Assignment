import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ originalItems, setfilteredCard }) => {
  // State to store the current search text
  const [searchText, setSearchText] = useState("");



  // Effect to trigger the search function whenever searchText changes
  useEffect(() => {
    findSearch();
  }, [searchText]);



  // Function to filter items based on the search text
  const findSearch = () => {
    if (searchText === "") {
      // If search text is empty, reset the filtered items to original items
      setfilteredCard(originalItems);
    } else {
      // Filter items where the name includes the search text
      setfilteredCard(
        originalItems?.filter((item) =>
          item?.name?.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  };



  return (
    <div className="flex flex-col items-center font-sans p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 mt-3 text-center text-gray-800">Find Products</h1>
      <div className="relative mt-4 w-full md:w-7/12 lg:w-8/12">
        <input
          type="text"
          placeholder="Search Store"
          className="border rounded px-4 py-2 w-full pl-10"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} // Update search text on input change
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
