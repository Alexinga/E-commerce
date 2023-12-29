import { createSlice } from "@reduxjs/toolkit";
const favItems =
  localStorage.getItem("favItems") !== null
    ? JSON.parse(localStorage.getItem("favItems"))
    : [];

const initialState = {
  favorite: favItems,
};
const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFav(state, action) {
      state.favorite.push(action.payload);
      localStorage.setItem(
        "favItems",
        JSON.stringify(state.favorite.map((item) => item))
      );
    },
    deleteFav(state, action) {
      state.favorite = state.favorite.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "favItems",
        JSON.stringify(state.favorite.map((item) => item))
      );
    },
    clearFav(state) {
      state.favorite = [];
      localStorage.setItem(
        "favItems",
        JSON.stringify(state.favorite.map((item) => item))
      );
    },
  },
});
export const { addFav, deleteFav, clearFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
export const getFavorite = (state) => state.favorite.favorite;
