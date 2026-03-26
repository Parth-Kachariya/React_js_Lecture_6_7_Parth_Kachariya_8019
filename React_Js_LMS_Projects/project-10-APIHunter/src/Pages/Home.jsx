import { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../Components/MovieList";

const API_KEY = "thewdb";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAllMovies = async () => {
    try {
      setLoading(true);

      let allMovies = [];
      const keywords = [
        "avengers",
        "batman",
        "spiderman",
        "love",
        "war",
        "king",
        "robot",
        "action",
        "comedy",
        "horror",
      ];

      for (let key of keywords) {
        const res = await axios.get(
          `https://www.omdbapi.com/?s=${key}&apikey=${API_KEY}`,
        );

        if (res.data.Search) {
          allMovies = [...allMovies, ...res.data.Search];
        }
      }

      const uniqueMovies = Array.from(
        new Map(allMovies.map((m) => [m.imdbID, m])).values(),
      );

      setMovies(uniqueMovies);
    } catch (err) {
      console.log(err);
      setError("Something went wrong ");
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchMovies = async () => {
    if (!search.trim()) {
      fetchAllMovies();
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`,
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
    fetchAllMovies();
  }, []);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      fetchSearchMovies();
    }
  };

  return (
    <div className="p-4 bg-black min-h-screen text-white">
      <div className="max-w-xl mx-auto py-10 flex gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Search movies..."
          className="flex-1 p-2 rounded border border-white text-white bg-transparent"
        />

        <button
          onClick={fetchSearchMovies}
          className="bg-red-500 cursor-pointer px-4 rounded"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-center text-gray-400">{error}</p>}

      {!loading && !error && movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
