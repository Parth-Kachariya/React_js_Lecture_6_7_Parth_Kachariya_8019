const MovieCard = ({ movie }) => {
  const addToWishlist = () => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (!data.find((m) => m.imdbID === movie.imdbID)) {
      const updated = [...data, movie];
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  return (
    <div className="bg-white p-3 rounded shadow">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        className="h-60 w-full object-cover"
      />

      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>

      <button
        onClick={addToWishlist}
        className="bg-green-500 text-white px-2 py-1 mt-2 rounded"
      >
        Add 
      </button>
    </div>
  );
};

export default MovieCard;