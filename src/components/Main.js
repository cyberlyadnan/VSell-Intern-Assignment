import React, { useState } from "react";
import Card from "./Card";
import { FoodItems } from "../utils/constants";
import SearchBar from "./SearchBar";
import errorSearch from "../assets/search-error.png";

const Main = () => {
  const [filteredCard, setfilteredCard] = useState(FoodItems);

  return (
    <>
      <SearchBar originalItems={FoodItems} setfilteredCard={setfilteredCard} />
      <div className="font-sans flex flex-wrap lg:gap-4 gap-4 p-4 justify-center lg:px-36">
        {filteredCard.length > 0 ? (
          filteredCard?.map((item, index) => <Card key={index} props={item} />)
        ) : (
          <>
          <div className="flex flex-col justify-center items-center">
            <img src={errorSearch} alt="No Result Found" />
            <h1 className="text-xl font-bold">No Result Found</h1>
          </div>
          </>
        )}
      </div>
    </>
  );
};

export default Main;
