import React from "react";
import { CDN_IMG_URL } from "../utils/Links";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="">
      <div className="w-40">
        <img src={CDN_IMG_URL + posterPath} alt="movie Card" />
      </div>
    </div>
  );
};

export default MovieCard;
