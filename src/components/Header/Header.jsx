import React from "react";
import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function Header() {
  const { amount } = useSelector((state) => state.product);

  return (
    <header className="py-8 shadow-md">
      <div className="container flex items-center">
        <Link className="font-bold flex gap-3 items-center text-2xl text-primary" to="/">
         <img className="w-13 h-10 " src="../../../public/onion.png" alt="" /> piyoz market
        </Link>

        <div className="ml-auto">
          <div className="btn btn-header text-xl relative">
            <IoCartSharp className="text-primary" />
            {amount > 0 && (
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary rounded-full text-xs text-white font-semibold shadow-md">
                {amount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;