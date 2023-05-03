import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const notify = () => toast("Added to Favorite");
  const {
    id,
    name,
    picture,
    description,
    likes,
    num_recipes,
    years_of_experience,
    recipes,
  } = chef;
  const [fav, setFav] = useState(false);
  return (
    <div className=" mt-5">
      <div className="w-9/12 mx-auto">
        <img src={picture} className=" rounded" alt="" />
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-center mt-2">Name: {name}</h1>
          <div className="flex justify-center items-center gap-2">
            <p>Add to Favorite</p>
            <button onClick={() => setFav(!fav)}>
              {!fav ? (
                <FaRegHeart
                  onClick={() => notify()}
                  className="text-red-500 text-2xl"
                ></FaRegHeart>
              ) : (
                <FaHeart className="text-red-500 text-2xl"></FaHeart>
              )}
            </button>
            <ToastContainer />
          </div>
        </div>
        <p className="text-xl text-center mt-2">Description: {description}</p>
      </div>{" "}
      <div className="md:flex justify-evenly w-9/12 mx-auto">
        <h1 className="text-2xl font-bold text-center mt-2 p-3 bg-slate-300 rounded-lg">
          Years of Experience: {years_of_experience}
        </h1>
        <h1 className="text-2xl font-bold text-center mt-2 p-3 bg-slate-300 rounded-lg">
          Number of Recipes: {num_recipes}
        </h1>
        <h1 className="text-2xl font-bold text-center mt-2 p-3 bg-slate-300 rounded-lg">
          Number of Likes: {likes}
        </h1>
      </div>
      <div className="mt-5 w-full">
        <h1 className="text-3xl font-bold text-center mt-2">Recipes</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Likes</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => {
              return (
                <tr key={recipe.id}>
                  <td className="border px-4 py-2">{recipe.name}</td>
                  <td className="border px-4 py-2">{recipe.description}</td>
                  <td className="border px-4 py-2">{recipe.likes}</td>
                  <td className="border px-4 py-2">{recipe.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChefDetails;
