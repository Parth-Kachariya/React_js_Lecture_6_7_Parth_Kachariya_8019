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
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-4">
          {wishlist.map((movie) => (
            <div key={movie.imdbID} className="bg-white p-3 rounded shadow">
              <img src={movie.Poster} className="h-60 w-full object-cover" />
              <h3>{movie.Title}</h3>

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