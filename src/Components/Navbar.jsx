import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="mx-auto flex max-w-[1640px] items-center justify-between p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="px-2 text-[22px] sm:text-3xl lg:text-4xl">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="text-14 hidden items-center rounded-full bg-gray-200 p-1 text-[14px] lg:flex">
          <p className="rounded-full bg-black p-2 text-white">Delivery</p>
          <p className="p-2">pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="flex w-[200px] items-center rounded-full bg-gray-200 px-2 sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="w-full bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search foods..."
        />
      </div>
      {/* cart */}
      <button className="hidden items-center rounded-full bg-black py-2 text-white md:flex">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* mobile nav */}
      {nav ? <div className="fixed left-0 top-0 z-10 h-screen w-full bg-black/80"></div> :''}

      <div
        className={
          nav
            ? "fixed left-0 top-0 z-10 h-screen w-[300px] bg-white duration-300"
            : "fixed left-[-100%] top-0 z-10 h-screen w-[300px] bg-white duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
          size={25}
        />
        <h2 className="p-4 text-2xl">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col px-4 text-gray-800">
            <li className="flex items-center py-4 text-xl">
              <TbTruckDelivery className="mr-4" />
              Orders
            </li>
            <li className="flex items-center py-4 text-xl">
              <MdFavorite className="mr-4" />
              Favorite
            </li>
            <li className="flex items-center py-4 text-xl">
              <FaWallet className="mr-4" />
              Wallet
            </li>
            <li className="flex items-center py-4 text-xl">
              <MdHelp className="mr-4" />
              Help
            </li>
            <li className="flex items-center py-4 text-xl">
              <AiFillTag className="mr-4" />
              Promotions
            </li>
            <li className="flex items-center py-4 text-xl">
              <BsFillSaveFill className="mr-4" />
              Best Ones
            </li>
            <li className="flex items-center py-4 text-xl">
              <FaUserFriends className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
