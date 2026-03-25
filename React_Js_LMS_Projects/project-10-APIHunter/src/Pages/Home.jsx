import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

// ✅ Demo API Key (working for testing)
const API_KEY = "thewdb";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
      );

      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
        setError("No movies found ");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      {/*  Search */}
      <div className=" max-w-1/2 mx-auto py-10 flex-wrap flex gap-3 mb-4">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="flex-1 p-2 border rounded"
        />

        <button
          onClick={fetchMovies}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {/*  Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/*  Error */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/*  Movie List */}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;