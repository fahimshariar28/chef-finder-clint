import React from "react";
import { FaCoffee, FaUser, FaUtensilSpoon } from "react-icons/fa";

const Services = () => {
  return (
    <div className="w-9/12 mx-auto mt-5">
      <h2 className="text-2xl font-semibold text-center">Our Services </h2>
      <div className="md:flex justify-evenly items-center gap-5">
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FaUser></FaUser> Best Chefs
            </h2>
          </div>
        </div>
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FaCoffee></FaCoffee> Recipes of all Chefs
            </h2>
          </div>
        </div>
        <div className="card shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              <FaUtensilSpoon></FaUtensilSpoon> Learn recipes
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
