import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import NotFound from "../NotFound/NotFound";

const FoodItems = () => {
  const [category, setCategory] = useState("");
  const [foods, setFoods] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => {
        const selectedIndex = Math.floor(
          Math.random() * res.data.categories.length
        );
        const seletedCategory = res.data.categories[selectedIndex].strCategory;
        setCategory(seletedCategory);
      });
  }, []);
  useEffect(() => {
    if (category) {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${category[0]}`;
      axios
        .get(url)
        .then((res) => setFoods(res.data.meals))
        .then((res) => setLoading(false));
    }
  }, [category]);
  const handleSearchEnter = (event) => {
    const searchTerm = event.target.value;
    if (event.key === "Enter") {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      axios
        .get(url)
        .then((res) => {
          setFoods(res.data.meals);
        })
        .then((res) => setLoading(false))
        .catch((e) => console.log(e));

      event.target.value = "";
    }
  };
  return (
    <div>
      <div className={isLoading ? "hidden" : "block"}>
        <div className="text-center">
          <input
            type="text"
            className="border-2 placeholder:text-black p-3 border-black rounded-md outline-hidden w-2/4 py-2 my-3"
            name=""
            id=""
            placeholder="Search Food Recipe And Press Enter"
            onKeyUp={handleSearchEnter}
          />
        </div>
        <div className={foods ? "grid grid-cols-4 gap-4" : "text-center"}>
          {foods === null ? (
            <NotFound />
          ) : (
            foods.map((food) => <Item key={food.idMeal} food={food} />)
          )}
        </div>
      </div>
      <div className={isLoading ? "block mt-11" : "hidden"}>
        <h2 className="text-4xl text-center">Loading...</h2>
      </div>
    </div>
  );
};

export default FoodItems;
