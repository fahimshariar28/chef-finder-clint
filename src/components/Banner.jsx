import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="mt-5 p-3 bg-[url('https://i.ibb.co/qNSVB53/ristorisheader-3.jpg')] min-h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-white rounded-md">
      <h2 className="text-3xl font-bold w-6/12 mx-auto text-center">
        No matter what food you want,
        <br /> you can find every recipe here
      </h2>
      <p className="mt-3 w-10/12 mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ea
        autem natus modi laborum. Fuga, illum modi tempore magnam facilis quas
        quaerat aut unde voluptatibus tenetur autem fugiat, vero ratione culpa
        recusandae accusamus placeat!
      </p>
      <div className="flex justify-center mt-3">
        <button className="bg-orange-500 rounded-lg px-3 py-2 text-white font-semibold">
          Explore Recipe{" "}
          <span>
            <FaArrowRight></FaArrowRight>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
