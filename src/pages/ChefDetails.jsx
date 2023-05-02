import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const chef = useLoaderData();
  console.log(chef);
  const {
    id,
    name,
    picture,
    description,
    likes,
    num_recipes,
    years_of_experience,
  } = chef;
  return (
    <div className="w-9/12 mx-auto mt-5">
      <h2>Details Coming soon</h2>
    </div>
  );
};

export default ChefDetails;
