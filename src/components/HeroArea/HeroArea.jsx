import React from "react";
import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/solid";
const HeroArea = () => {
  return (
    <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-3 mx-4 mt-6 font-serif">
      <div className="flex flex-col lg:order-none sm:order-1 justify-center mx-9">
        <h5 className="mb-9 ml-7">Ready Cook Food</h5>
        <h1 className="text-6xl mb-7">
          Get Our Quality Food in Less Then Thirty Minutes
        </h1>
        <p className="text-[16px] mb-7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          culpa facilis quasi molestias officia veniam architecto, doloremque,
          minus dolore vel ducimus, quisquam hic atque autem ab sapiente sunt
          fugiat eum!
        </p>
        <button className="text-white mb-5 p-3 flex justify-center  rounded bg-red-700 w-52">
          Order Food <ArrowRightIcon className="w-6 h-6 ml-3" />
        </button>
        <button className="text-white p-3 mb-5 flex justify-center  rounded bg-red-700 w-52">
          Partner With Us <BriefcaseIcon className="w-6 h-6 ml-3" />
        </button>
      </div>
      <div className="sm:order-none lg:order-1">
        <img
          src="https://img.freepik.com/free-vector/eating-healthy-food-concept-illustration_114360-2235.jpg?t=st=1648494010~exp=1648494610~hmac=b4ad9f4f47014a020c77afba491ddf4dec48f51c9ae9f5d49d9a12feadb0b29f&w=740"
          alt="eating food"
        />
      </div>
    </div>
  );
};

export default HeroArea;
