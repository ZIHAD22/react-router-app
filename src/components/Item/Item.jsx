import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Item = () => {
  return (
    <div className="w-[350px] h-[450px] m-5 shadow-2xl">
      <div className="m-2 bg-gray-300">
        <img
          src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?t=st=1648496810~exp=1648497410~hmac=5b9c7108714fa51319a636c70768bfb59234bef1299b241cdeb80ba604b56187&w=900"
          alt=""
        />
      </div>
      <div className="m-2">
        <h1 className="text-2xl mt-5">Teriyaki Chicken Casserole</h1>
        <h5 className="text-[18px] mt-5">Category: Chicken</h5>
        <button className="flex px-4 mt-16 py-2 text-white border-2 font-bold border-[#243b48] rounded-lg mx-auto bg-[#243b48] hover:bg-white hover:text-black duration-500 hover:border-2 hover:font-bold">
          Order Now <ArrowRightIcon className="w-5 h-6 ml-3" />
        </button>
      </div>
    </div>
  );
};

export default Item;
