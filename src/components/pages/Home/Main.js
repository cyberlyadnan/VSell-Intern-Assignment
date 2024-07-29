import React, { useState } from "react";
import Card from "./Card";
import { FoodItems } from "../../../utils/constants";
import SearchBar from "./SearchBar";
import errorSearch from "../../../assets/search-error.png";

const Main = () => {
  // State to hold the filtered list of food items
  const [filteredCard, setfilteredCard] = useState(FoodItems);

  return (
    <>
      {/* SearchBar component to filter food items */}
      <SearchBar originalItems={FoodItems} setfilteredCard={setfilteredCard} />
      {/* Container for displaying the list of food items or error message */}
      <div className="font-sans flex flex-wrap lg:gap-4 gap-4 p-4 justify-center lg:px-36 mb-12">
        {/* Check if there are any filtered items to display */}
        {filteredCard.length > 0 ? (
          // Map through filtered items and render a Card component for each
          filteredCard?.map((item, index) => <Card key={index} props={item} />)
        ) : (
          // Display a message and image if no results are found
          <div className="flex flex-col justify-center items-center">
            <img src={errorSearch} alt="No Result Found" />
            <h1 className="text-xl font-bold">No Result Found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
