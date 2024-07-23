import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlaingMovies);
  const popularMovies = useSelector((store) => store?.movie?.popularMovies);
  const topRated = useSelector((store) => store?.movie?.topRatedMovies);
  return (
    <div className="bg-black">
      <div className=" relative -mt-52">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top Rated"} movies={topRated} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
