import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toggleSearch: false,
};
const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    setToggleSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
  },
});
export const { setToggleSearch } = gptSlice.actions;
export default gptSlice.reducer;
