import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="p-5 bg-red-500 text-white text-3xl font-bold px-50">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Header from Home</Link>
          <div className="mx-5">|</div>
          <Link to="/cart">Cart</Link>
        </div>
        <div className="flex-end relative"></div>
      </div>
    </div>
  );
}
