import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  return (
    <div className="p-3">
      <h1 className=" px-3 py-3 font-bold text-xl text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies.map((eachMovieCard) => (
          <div key={eachMovieCard.id} className="px-2">
            <MovieCard posterPath={eachMovieCard.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
