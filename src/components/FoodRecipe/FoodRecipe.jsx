import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodRecipe = () => {
  const { foodId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
      .then((res) => setRecipe(res.data.meals[0]))
      .then((res) => setLoading(false));
  }, [foodId]);
  return (
    <div>
      <div
        className={`${
          isLoading ? "hidden" : "grid lg:grid-cols-2 sm:grid-cols-1 "
        }`}
      >
        <div className="flex justify-center items-center mt-12">
          <img src={recipe.strMealThumb} className="w-3/4" alt="" />
        </div>
        <div className="">
          <h1 className="text-4xl sm:text-3xl text-center mt-6 font-medium">
            Recipe Name:{" "}
            {recipe.strMeal > 20
              ? recipe.strMeal.slice(0, 20) + "..."
              : recipe.strMeal}
          </h1>
          <h2 className="text-3xl mt-6 ">Recipe:</h2>
          <p className="text-[20px] font-thin mt-2  mr-11 sm:mr-0 sm:p-5">
            {recipe.strInstructions}
          </p>
        </div>
      </div>
      <div className={isLoading ? "block mt-11 " : "hidden"}>
        <h2 className="text-4xl text-center">Loading...</h2>
      </div>
    </div>
  );
};

export default FoodRecipe;
