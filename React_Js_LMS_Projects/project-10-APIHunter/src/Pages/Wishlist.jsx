import { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(data);
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((m) => m.imdbID !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl text-center my-2 p-4 bg-gray-800  font-bold mb-4">
        {" "}
        Your Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-600">No items</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-4">
          {wishlist.map((movie) => (
            <div
              key={movie.imdbID}
              className="border-2 border-gray-600  p-3 rounded shadow"
            >
              <img
                src={movie.Poster}
                className="h-60 w-full rounded  object-cover"
              />
              <h3 className="p-3 my-1 rounded bg-gray-800 text-white">
                {movie.Title}
              </h3>

              <button
                onClick={() => removeItem(movie.imdbID)}
                className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
