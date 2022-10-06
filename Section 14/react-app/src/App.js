import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

const BASE_URL = "https://swapi.dev/api";

// const dummyMovies = [
//   {
//     id: 1,
//     title: 'Some Dummy Movie',
//     openingText: 'This is the opening text of the movie',
//     releaseDate: '2021-05-18',
//   },
//   {
//     id: 2,
//     title: 'Some Dummy Movie 2',
//     openingText: 'This is the second opening text of the movie',
//     releaseDate: '2021-05-19',
//   },
// ];

const transformMovieData = (data = []) =>
  data.results.map((movie, i) => ({
    id: movie.episode_id,
    title: movie.title,
    openingText: movie.opening_crawl,
    releaseDate: movie.release_date,
  }));

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateMovies = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/films`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();
      const transformedData = transformMovieData(data);

      setMovies((prev) => (prev = [...transformedData]));

      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    generateMovies();
  }, [generateMovies]);

  return (
    <React.Fragment>
      <section>
        <button onClick={generateMovies}>Fetch Movies</button>
      </section>
      <section>
        {loading && <p>Loading...</p>}
        {!loading && movies.length === 0 && !error && <p>No movies...</p>}
        {!loading && error !== null && <p>{error}</p>}
        {!loading && movies.length > 0 && <MoviesList movies={movies} />}
      </section>
    </React.Fragment>
  );
}

export default App;
