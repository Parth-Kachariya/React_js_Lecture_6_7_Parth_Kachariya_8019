import { useState, useEffect } from "react";

const fallback =
  "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Avengers-Endgame-Box-Office-SR.jpg";

const MovieCard = ({ movie }) => {
  const [imgSrc, setImgSrc] = useState(fallback);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (movie.Poster && movie.Poster !== "N/A") {
      setImgSrc(movie.Poster);
    } else {
      setImgSrc(fallback);
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.find((m) => m.imdbID === movie.imdbID)) {
      setAdded(true);
    }
  }, [movie]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!added) {
      const updated = [...wishlist, movie];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setAdded(true);
    } else {
      const updated = wishlist.filter((m) => m.imdbID !== movie.imdbID);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setAdded(false);
    }
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <div className="border p-2 border-gray-400  relative group cursor-pointer overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={imgSrc}
        alt={movie.Title}
        onError={() => setImgSrc(fallback)}
        className="h-64  w-full object-cover rounded-lg"
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-3">
        <div>
          <h3 className="text-white font-bold text-sm">{movie.Title}</h3>
          {movie.Year && (
            <p className="text-gray-300 text-xs font-semibold mt-1">Year: {movie.Year}</p>
          )}
          {movie.Type && (
            <p className="text-gray-300 text-xs font-semibold mt-1">Type: {movie.Type}</p>
          )}
        </div>

        <button
          onClick={toggleWishlist}
          className={`mt-2 text-xs px-2 py-1 rounded ${
            added ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {added ? "Added" : "Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
