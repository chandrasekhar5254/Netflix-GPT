import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-48 px-12  absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="font-bold text-5xl font-sans text-cyan-50">{title}</h1>
      <p className="py-2 leading-8 tracking-wider text-lg w-1/3 text-cyan-50">
        {overview}
      </p>
      <div className="flex items-center gap-x-4 py-4">
        <button className="px-5 py-2 hover:bg-opacity-50 hover:cursor-pointer rounded-sm bg-white text-black font-medium">
          {" "}
          ▶️ Play
        </button>

        <button className=" bg-gray-500 px-6 py-2 hover:bg-opacity-50 hover:cursor-pointer rounded-sm text-white font-medium">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
