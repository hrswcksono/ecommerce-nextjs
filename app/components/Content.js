"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Img from "../assets/image/cookbook.jpg";
import Tv1 from "../assets/image/tv-1.jpg";
import Tv2 from "../assets/image/tv-2.jpg";
import Tv3 from "../assets/image/tv-3.jpg";
import CurrentCategory from "./CurrentCategory";
import { Rating } from "@smastrom/react-rating";
import { register } from "swiper/element/bundle";
import Reviews from "./Reviews";

const Content = () => {
  const listImage = [Tv1, Tv2, Tv3];
  register();

  return (
    <>
      <div className="p-8 md:flex gap-4 bg-white">
        <div className="w-80">
          <swiper-container
            // ref={swiperElRef}
            slides-per-view="1"
            pagination="true"
          >
            {listImage.map((item, index) => {
              return (
                <swiper-slide key={index.toString}>
                  <Image
                    src={item}
                    alt={"prouct1"}
                    height={400}
                    width={300}
                  ></Image>
                </swiper-slide>
              );
            })}
          </swiper-container>
        </div>
        {/* <Image src={Tv1} alt={"prouct1"} height={400} width={300}></Image> */}
        <div className="">
          <div className="text-xl mb-2">
            The Childs Story Bible Hardcover – Picture Book, August 29, 1983
          </div>
          <CurrentCategory />
          <Rating
            style={{
              maxWidth: 120,
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
            }}
            value={3}
            readOnly
          />
          <div>
            Hundreds of thousands of children throughout the world have been
            introduced to the riches of the Bible through this classic Bible
            storybook. First published seventy years ago, the much-loved Childs
            Story Bible continues to instruct and delight todays children and
            parents.
          </div>
          <div className="text-xl my-2">Total price : $20.21</div>
          <button
            type="button"
            className="bg-yellow-300 rounded-lg py-1 px-10 mb-5"
          >
            Add to Cart
          </button>
        </div>
        <div className="bg-gray-400 w-5/12 rounded-md p-5">
          <div className="text-lg text-black mb-4">Specifications</div>
          <hr />
          <div>Size</div>
          <ul>
            <li>
              <input type="checkbox" name="" value="" /> L
            </li>
            <li>
              <input type="checkbox" name="" value="" /> XL
            </li>
            <li>
              <input type="checkbox" name="" value="" /> XXL
            </li>
            <hr className="" />
            <div>Color</div>
            <li>
              <div className="flex pb-2">
                <input type="checkbox" name="" value="" />{" "}
                <div className="h-4 w-4 rounded-md ml-1 pt-2 bg-red-600"></div>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <input type="checkbox" name="" value="" />{" "}
                <div className="h-4 w-4 rounded-md ml-1 bg-blue-500"></div>
              </div>
            </li>
            <li>
              <div className="flex pb-2">
                <input type="checkbox" name="" value="" />{" "}
                <div className="h-4 w-4 rounded-md ml-1 bg-yellow-300"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default Content;
