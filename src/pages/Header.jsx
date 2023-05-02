import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
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
        {user?.photoURL ? (
          <img className="w-8 rounded-full" src={user.photoURL} alt="" />
        ) : (
          <FaUserCircle
            style={{ color: "orange", fontSize: "2rem" }}
          ></FaUserCircle>
        )}
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link onClick={handleLogout}>Logout</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
