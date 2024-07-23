import React from "react";
import lang from "../utils/LanguageConst";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languagaKey = useSelector((store) => store?.lang?.changeLanguage);

  return (
    <div className="py-52 flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[languagaKey].gtpSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded"
        />
        <button className="py-2 col-span-3 m-4  border border-black bg-red-700 text-white rounded-lg ">
          {lang[languagaKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
