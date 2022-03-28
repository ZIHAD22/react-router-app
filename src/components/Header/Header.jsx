import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-around items-center p-4 bg-blue-900 text-white">
      <span>Ready To Cook</span>
      <div className="">
        <ul className="flex">
          <li className="mx-2">
            <a href="/">Home</a>
          </li>
          <li className="mx-2">
            <a href="/order">Order</a>
          </li>
          <li className="mx-2">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
