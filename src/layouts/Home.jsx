import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
