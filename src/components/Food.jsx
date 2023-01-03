import React, { useState } from "react";
import { data } from "../utils/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  // fitler type by food {burger, pizza, etc.}
  const filterType = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category;
      })
    );
  };

  // fitler type price

  const filterPrice = (price) => {
    setFoods(
      data.filter((cost) => {
        return cost.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* display food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map(({ id, name, category, image, price }) => (
          <div
            key={id}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={image}
              alt={name}
              className="w-full object-cover rounded-t-lg h-[200px] "
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
