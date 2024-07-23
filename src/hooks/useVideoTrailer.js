import { API_OPTIONS } from "../utils/Links";
import { useDispatch } from "react-redux";
import { setTrailerVideo } from "../redux/movieSlice";
import { useEffect } from "react";
const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const responce = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const data = await responce.json();

    const filterMovieTriler = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const movieTriler = filterMovieTriler.length
      ? filterMovieTriler[1]
      : data.results[0];
    dispatch(setTrailerVideo(movieTriler));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useVideoTrailer;
