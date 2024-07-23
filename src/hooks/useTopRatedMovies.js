import React, { useEffect } from "react";
import { API_URL_TOP_RATED, API_OPTIONS } from "../utils/Links";
import { useDispatch } from "react-redux";
import { setTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const respone = await fetch(API_URL_TOP_RATED, API_OPTIONS);
    const json = await respone.json();
    dispatch(setTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
