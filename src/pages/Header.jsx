import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
        {!user ? (
          <>
            <FaUserCircle
              style={{ color: "orange", fontSize: "2rem" }}
            ></FaUserCircle>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <Link to="/logout">Logout</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
