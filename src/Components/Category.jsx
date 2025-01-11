import React from "react";
import { categories } from "../data/data";

export const Category = () => {
  const category = categories;

  return (
    <div className="mx-auto max-w-[1640px] p-4 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-orange-600 sm:text-4xl">
        Top Rated Menu Items
      </h1>
      {/* category */}
      <div className="grid grid-cols-2 gap-6 py-6 md:grid-cols-4">
        {category.map((item) => (
          <div
            key={item.id}
            className="flex cursor-pointer items-center justify-between rounded-lg bg-gray-100 p-4 duration-300 hover:scale-105"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-16 380px:w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
