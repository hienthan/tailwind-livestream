import { useState } from "react";
const Review = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className="flex gap-1 mb-1">
      {[1, 2, 3, 4, 5].map((star: number) => (
        <button
          key={star}
          onClick={() => setRating(star)}
          className="cursor-pointer rounded-sm border border-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={star <= rating ? "#FFD700" : "#D1D5DB"}
            className="h-8 w-8"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default Review;
