import { data } from "../data/data";
import React, { useState } from "react";
export const Food = () => {
  const [foods, setFoods] = useState(data);
  // filter category
  const filterType = (category) => {
    setFoods(
      data.filter((food) => {
        return food.category === category;
      }),
    );
  };
  // filter price
  const filterPrice = (price) => {
    setFoods(
      data.filter((food) => {
        return food.price === price;
      }),
    );
  };
  return (
    <div className="m-auto max-w-[1640px] px-4 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-orange-600 sm:text-4xl">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* filter type */}
        <div className="">
          <p className="mb-3 font-bold text-gray-700">Filter Type</p>
          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => setFoods(data)}
              className="m-1 flex-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white sm:flex-none"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 flex-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white sm:flex-none"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 flex-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white sm:flex-none"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 flex-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white sm:flex-none"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 flex-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white sm:flex-none"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* filter price */}
        <div className="">
          <p className="mb-3 font-bold text-gray-700">Filter price</p>
          <div className="flex w-full max-w-[390px] flex-wrap justify-between">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 rounded-full border-orange-600 font-bold text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* foods */}
      <div className="502px:grid-cols-2 grid grid-cols-1 gap-6 pt-4 lg:grid-cols-4">
        {foods.map((food) => (
          <div
            key={food.id}
            className="cursor-pointer rounded-lg border shadow-lg duration-300 hover:scale-105"
          >
            <img
              className="h-[200px] w-full rounded-t-lg object-cover"
              src={food.image}
              alt={food.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{food.name}</p>
              <p className="">
                <span className="rounded-full bg-orange-600 p-1 text-white">
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
