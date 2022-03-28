import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-around items-center p-4 bg-[#243b48] text-white">
      <span>Ready Cook Food</span>
      <div className="">
        <ul className="flex">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/foods">Food</Link>
          </li>
          <li className="mx-2">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
