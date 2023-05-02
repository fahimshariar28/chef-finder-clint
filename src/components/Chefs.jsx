import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";

const Chefs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="grid md:grid-cols-3 gap-3 mt-5">
      {data.map((chef) => (
        <SingleChef key={chef.id} chef={chef}></SingleChef>
      ))}
    </div>
  );
};

export default Chefs;
