import React from "react";
export default function HeadLineCard() {
  return (
    <div className="mx-auto grid max-w-[1640px] gap-6 p-4 py-12 md:grid-cols-3">
      {/* card */}
      <div className="relative">
        <div className="absolute h-full w-full rounded-xl bg-black/50 text-white">
          <p className="p-2 pt-4 font-bold">Sun's Out, BOGO's Out</p>
          <p className="p-2">Through 8/26</p>
          <button className="absolute bottom-4 mx-2 rounded-full border-white bg-white text-black">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]"
          src="./img/headline1.jpg"
          alt=""
        />
      </div>
      {/* card */}
      <div className="relative">
        <div className="absolute h-full w-full rounded-xl bg-black/50 text-white">
          <p className="p-2 pt-4 font-bold">New Restaurants</p>
          <p className="p-2">Added Daily</p>
          <button className="absolute bottom-4 mx-2 rounded-full border-white bg-white text-black">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]"
          src="./img/headline2.jpg"
          alt=""
        />
      </div>
      {/* card */}
      <div className="relative">
        <div className="absolute h-full w-full rounded-xl bg-black/50 text-white">
          <p className="p-2 pt-4 font-bold">We Deliver Desserts Too</p>
          <p className="p-2">Tasty Treats</p>
          <button className="absolute bottom-4 mx-2 rounded-full border-white bg-white text-black">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] w-full rounded-xl object-cover md:max-h-[200px]"
          src="./img/headline3.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
