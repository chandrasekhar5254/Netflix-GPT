import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changeLanguage: "en",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setChangeLanguage: (state, action) => {
      state.changeLanguage = action.payload;
    },
  },
});
export const { setChangeLanguage } = configSlice.actions;
export default configSlice.reducer;
