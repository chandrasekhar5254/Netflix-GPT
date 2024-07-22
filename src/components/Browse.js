import React from "react";
import Header from "./Header";
import { BG_LINK } from "../utils/Links";

const Browse = () => {
  return (
    <div>
      <Header />
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_LINK})` }}
      ></div>
    </div>
  );
};

export default Browse;
