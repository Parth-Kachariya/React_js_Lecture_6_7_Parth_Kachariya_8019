import { useState } from "react";

const Comment = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const addReview = () => {
    if (!name || !comment || rating === 0) return;

    const newReview = {
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-2 justify-center items-center p-4">
      <div className="w-full max-w-md bg-white p-5 rounded-xl shadow">
        <h2 className="text-3xl my-4 font-extrabold mb-4 text-center">
          PR-4-Comment / Review
        </h2>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border-blue-500 border-b my-3 outline-0 p-2 mb-3 rounded"
        />

        {/*  Star Rating*/}
        <div className="flex justify-center items-center gap-2 my-3 py-1 px-2  border border-blue-500 rounded-lg w-fit">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setRating(star)}
              className={`cursor-pointer text-3xl transition ${star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Comment */}
        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-2 my-3 border-blue-500 outline-blue-500 rounded"
        />

        {/* Submit */}
        <button
          onClick={addReview}
          className=" bg-blue-500 text-white py-2 px-3 font-semibold cursor-pointer rounded-xl hover:bg-blue-600"
        >
          Submit Review
        </button>
      </div>

      <div className="w-full max-w-md  bg-white p-5 rounded-xl shadow">

        {/* Review Cards */}
        <h2 className="font-bold p-2 text-center bg-gray-800 text-white rounded-xl text-lg">Customer Reviews</h2>
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 my-3 flex flex-col flex-wrap border text-wrap border-blue-500/60 rounded-lg shadow"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.name}</h3>
              <span className="text-sm text-gray-500">
                {item.date}
              </span>
            </div>

            <div className="text-yellow-400 text-lg">
              {"★".repeat(item.rating)}
              <span className="text-gray-300">
                {"★".repeat(5 - item.rating)}
              </span>
            </div>

            <p className="text-gray-700 break-all mt-1">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment
