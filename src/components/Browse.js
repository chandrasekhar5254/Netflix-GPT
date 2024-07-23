import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      <MainConatiner />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
