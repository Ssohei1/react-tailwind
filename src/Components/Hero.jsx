import React from "react";

export default function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="relative">
        {/* Overlay */}
        <div className="absolute flex h-full max-h-[500px] w-full flex-col justify-center bg-black/40 text-gray-200 cursor-pointer">
          <h1 className="p-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="p-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Foods <span className="text-orange-500">Delivered</span>
          </h1>
        </div>
        <img
          className="max-h-[500px] w-full object-cover"
          src="./img/pexels.jpg"
          alt="hero"
        />
      </div>
    </div>
  );
}
