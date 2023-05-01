import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-9/12 mx-auto mt-5 flex justify-between items-center">
      <h2 className="text-3xl font-bold text-orange-500">Cheif Finder</h2>
      <nav className="flex gap-2">
        <Link to="/" className="font-semibold text-xl">
          Home
        </Link>
        <Link className="font-semibold text-xl">Blog</Link>
        <Link className="font-semibold text-xl">Contact Us</Link>
      </nav>
      <div className="flex gap-2 items-center">
        <FaUserCircle
          style={{ color: "orange", fontSize: "2rem" }}
        ></FaUserCircle>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;