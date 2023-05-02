import React, { useEffect, useState } from "react";
import SingleChef from "./SingleChef";

const Chefs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data.map((chef) => (
        <SingleChef key={chef.id} chef={chef}></SingleChef>
      ))}
    </div>
  );
};

export default Chefs;
