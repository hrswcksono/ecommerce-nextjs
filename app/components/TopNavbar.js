"use client";
import React, { useState, useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import Link from "next/link";

import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const TopNavbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [mobile, setMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setMobile(true);
      setNavbar(false);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <nav className="w-full bg-gray-900 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold text-white">LOGO</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose style={{ color: "white" }} />
                ) : (
                  <AiOutlineMenu style={{ color: "white" }} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-white">
              <li>
                <input
                  //   className="focus:outline-none focus:ring focus:ring-orange-400 md:h-10 w-full rounded-xl"
                  className="focus:outline-none focus:ring focus:ring-orange-400 rounded-md w-full h-9 px-4"
                  type=""
                  name=""
                  placeholder="Search Product"
                />
              </li>
              <li className="md:hover:border-2 hover:border-white hover:rounded-full">
                <Link
                  href="/"
                  className="hover:border-2 hover:border-white hover:rounded-sm"
                >
                  <div className="flex gap-3">
                    <AiOutlineHeart
                      style={{ color: "white", height: "25px", width: "25px" }}
                    />
                    {mobile ? <div>Whislist</div> : null}
                  </div>
                </Link>
              </li>
              <li className="md:hover:border-2 hover:border-white hover:rounded-full">
                <Link
                  href="/"
                  className="hover:border-2 hover:border-white hover:rounded-sm"
                >
                  <div className="flex gap-3">
                    <AiOutlineShoppingCart
                      style={{ color: "white", height: "25px", width: "25px" }}
                    />
                    {mobile ? <div>Cart</div> : null}
                  </div>
                </Link>
              </li>
              <li className="md:hover:border-2 hover:border-white hover:rounded-full">
                <Link
                  href="/"
                  className="hover:border-2 hover:border-white hover:rounded-sm"
                >
                  <div className="flex gap-3">
                    <BiUserCircle
                      style={{ color: "white", height: "25px", width: "25px" }}
                    />
                    {mobile ? <div>Profile</div> : null}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
