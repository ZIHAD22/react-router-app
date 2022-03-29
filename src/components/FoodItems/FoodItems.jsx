import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const FoodItems = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Beef")
      .then((res) => setFoods(res.data.meals));
  }, [foods]);
  return (
    <div className="grid grid-cols-4 gap-4">
      {foods.map((food) => (
        <Item key={food.idMeal} food={food} />
      ))}
    </div>
  );
};

export default FoodItems;
