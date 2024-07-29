import React from "react";
import { Link } from "react-router-dom";

const Card = ({ props }) => {
  const { name, image, color } = props;
  return (
    <div
      style={{ backgroundColor: color }}
      className={`flex flex-col bg-green-200 justify-center items-center border rounded-lg p-4 w-5/12 sm:w-5/12 md:w-3/12 lg:w-2/12 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer`}
    >
      <Link to={"/shop"}>
        <img src={image} alt={name} />
      </Link>
      <Link to={"/shop"}>
        <p className="font-sans text-xm font-bold text-center">{name}</p>
      </Link>
    </div>
  );
};

export default Card;
