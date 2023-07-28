"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Img from "../assets/image/cookbook.jpg";
import Tv1 from "../assets/image/tv-1.jpg";
import Tv2 from "../assets/image/tv-2.jpg";
import Tv3 from "../assets/image/tv-3.jpg";
import CurrentCategory from "./CurrentCategory";
import { Rating } from "@smastrom/react-rating";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Reviews from "./Reviews";

const Content = () => {
  const listImage = [Tv1, Tv2, Tv3];
  const [selectedImage, setSelectedImage] = useState(listImage[0]);

  const changeImage = (index) => {
    setSelectedImage(listImage[index]);
  };

  return (
    <>
      <div className="p-8 md:flex gap-4 bg-white">
        <div className="">
          <div className="h-80">
            <TransformWrapper>
              <TransformComponent>
                <Image
                  src={selectedImage}
                  alt={`product`}
                  height={1000}
                  width={1000}
                ></Image>
              </TransformComponent>
            </TransformWrapper>
          </div>
          <div className="flex gap-10 justify-center mt-2 h-11">
            {listImage.map((item, index) => {
              return (
                <button
                  className="hover:border-2 hover:border-orange-400 hover:rounded-md"
                  key={index.toString}
                  onClick={() => changeImage(index)}
                >
                  <Image
                    src={item}
                    alt={`product`}
                    height={50}
                    width={50}
                  ></Image>
                </button>
              );
            })}
          </div>
        </div>
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
