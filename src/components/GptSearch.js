import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_LINK } from "../utils/Links";
const GptSearch = () => {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_LINK})` }}
      >
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </div>
  );
};

export default GptSearch;
