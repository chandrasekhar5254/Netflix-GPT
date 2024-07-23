import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL_PAPULOR } from "../utils/Links";
import { setPopularMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const responce = await fetch(API_URL_PAPULOR, API_OPTIONS);
    const json = await responce.json();
    dispatch(setPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
