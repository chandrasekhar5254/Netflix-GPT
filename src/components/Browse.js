import React, { useEffect } from "react";
import Header from "./Header";
import { BG_LINK } from "../utils/Links";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainConatiner from "./MainConatiner";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainConatiner />
      <SecondaryContainer />
      {/* <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_LINK})` }}
      ></div> */}
    </div>
  );
};

export default Browse;
