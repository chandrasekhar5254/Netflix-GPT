import { API_OPTIONS, API_URL } from "../utils/Links";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const respone = await fetch(API_URL, API_OPTIONS);
    const data = await respone.json();
    console.log(data.results);
    dispatch(setNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
