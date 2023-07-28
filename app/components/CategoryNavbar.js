import React from "react";

const CategoryNavbar = () => {
  const listCategory = [
    "All",
    "Todays Deals",
    "Customer Service",
    "Registry",
    "Gift Cards",
    "Sell",
  ];

  return (
    <div className="bg-gray-600 h-11">
      <ul className="flex gap-x-2 p-2 text-white">
        {listCategory.map((item, index) => {
          return <li className=" hover:border-2 hover:rounded-md sm:px-0 md:px-2" key={index.toString}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default CategoryNavbar;
