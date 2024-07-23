import { API_OPTIONS, API_URL_NOW_PLAYING } from "../utils/Links";
import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const respone = await fetch(API_URL_NOW_PLAYING, API_OPTIONS);
    const data = await respone.json();
    dispatch(setNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default useNowPlayingMovies;
