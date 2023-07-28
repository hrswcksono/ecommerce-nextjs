import React from "react";

const CurrentCategory = () => {
  const listCategory = ["Books", "Novels", "Books", "Novels"];

  return (
    <>
      <div className="flex gap-2">
        {listCategory.map((item, idx) => {
          return (
            <div key={idx.toString} className="bg-gray-500 text-white rounded-sm px-1">
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrentCategory;
