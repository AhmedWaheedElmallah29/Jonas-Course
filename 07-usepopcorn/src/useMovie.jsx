import { useEffect, useState } from "react";
const KEY = "c7885d91";

export function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal },
        );
        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          console.log(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setError("");
      setMovies([]);
      return;
    }
    // handleCloseMovie();

    fetchMovies();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
