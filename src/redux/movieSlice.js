import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  nowPlaingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  trailerVideo: null,
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlaingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    setTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const {
  setNowPlayingMovies,
  setTrailerVideo,
  setTopRatedMovies,
  setPopularMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
