import React from "react";
import CustomLink from "../CustomLInk/CustomLink";

const Header = () => {
  return (
    <nav className="flex justify-around items-center p-4 bg-[#243b48] text-white">
      <CustomLink to="/">Ready Cook Food</CustomLink>
      <div className="">
        <ul className="flex">
          <li className="mx-2">
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li className="mx-2">
            <CustomLink to="/foods">Food</CustomLink>
          </li>
          <li className="mx-2">
            <CustomLink to="/about">About</CustomLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
