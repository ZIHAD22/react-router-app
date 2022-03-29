import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { strMeal, strCategory, strMealThumb, idMeal } = props.food;
  return (
    <div className="w-[350px] h-[450px] m-5 shadow-2xl rounded-md">
      <div className="m-2 bg-gray-300">
        <img className="h-[200px] w-full" src={strMealThumb} alt="" />
      </div>
      <div className="m-2">
        <h1 className="text-2xl mt-5">
          {strMeal.length > 30 ? strMeal.slice(0, 20) + "..." : strMeal}
        </h1>
        <h5 className="text-[18px] mt-5">Category: {strCategory}</h5>
        <Link
          to={`/foods/${idMeal}`}
          className="flex px-4 mt-16 py-2 justify-center text-white border-2 font-bold border-[#243b48] rounded-lg bg-[#243b48] hover:bg-white hover:text-black duration-500 hover:border-2 hover:font-bold"
        >
          Open Recipe <ArrowRightIcon className="w-5 h-6 ml-3" />
        </Link>
      </div>
    </div>
  );
};

export default Item;
