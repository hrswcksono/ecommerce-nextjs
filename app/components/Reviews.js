import React from "react";
import { Rating } from "@smastrom/react-rating";

const Reviews = () => {
  const listReviews = [
    {
      username: "User1",
      rating: 4,
      comment: "Great product! Highly recommended.",
    },
    {
      username: "User2",
      rating: 5,
      comment: "Excellent quality and fast shipping.",
    },
    {
      username: "User3",
      rating: 3,
      comment: "Average product. Could be better.",
    },
  ];

  return (
    <div className="px-8 pb-20 bg-white">
      <div className="text-lg">Reviews</div>
      <div className="flex-1 gap-y-3">
        {listReviews.map((item, index) => {
          return (
            <div className="flex gap-x-4 mb-3" key={index.toString}>
              <div className="bg-gray-700 h-10 w-10 rounded-full"></div>
              <div>
                <div className="font-bold">{item.username}</div>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={item.rating}
                  readOnly
                />
                <div className="text-sm">{item.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
