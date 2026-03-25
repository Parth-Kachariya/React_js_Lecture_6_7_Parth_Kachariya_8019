import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;