import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  nowPlaingMovies: null,
  trailerVideo: null,
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlaingMovies = action.payload;
    },
    setTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { setNowPlayingMovies, setTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
