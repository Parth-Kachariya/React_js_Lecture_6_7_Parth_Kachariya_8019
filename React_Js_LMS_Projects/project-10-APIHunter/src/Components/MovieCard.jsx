import { useEffect, useState } from "react";

const MovieCard = ({ movie }) => {
  const fallback =
    "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/01/Spider-Man-No-Way-Home-Avengers-Endgame-Box-Office-SR.jpg";
  const [added, setAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(fallback);

  useEffect(() => {
    if (movie.Poster && movie.Poster !== "N/A") {
      setImgSrc(movie.Poster);
    } else {
      setImgSrc(fallback);
    }
  }, [movie.Poster]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = data.find((m) => m.imdbID === movie.imdbID);
    if (exists) setAdded(true);
  }, [movie.imdbID]);

  const addToWishlist = () => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!data.find((m) => m.imdbID === movie.imdbID)) {
      const updated = [...data, movie];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setAdded(true);

      window.dispatchEvent(new Event("wishlistUpdated"));
    }
  };

  return (
    <div className="min-w-[150px] relative border rounded-xl p-2">
      <img
      src={imgSrc}
        // src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : fallback}
        onError={() => setImgSrc(fallback)}
        className="h-56 w-full object-cover rounded"
      />

      <h3 className="text-white p-3 bg-gray-800 rounded-lg font-semibold text-sm mt-2">
        {movie.Title}
      </h3>

      <button
        onClick={addToWishlist}
        className={`absolute top-3 right-3 px-2 py-1 text-xs rounded ${
          added ? "bg-green-500" : "bg-red-500"
        } text-white`}
      >
        {added ? "Added " : "Wishlist "}
      </button>
    </div>
  );
};

export default MovieCard;
