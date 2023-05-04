import React from "react";
import Banner from "../components/Banner";
import Chefs from "../components/Chefs";
import Contact from "../components/Contact";

const MainPage = () => {
  return (
    <div className="w-9/12 mx-auto mt-5">
      <Banner></Banner>
      <Chefs></Chefs>
      <Contact></Contact>
    </div>
  );
};

export default MainPage;
