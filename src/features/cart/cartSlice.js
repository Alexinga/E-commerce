import { createSlice } from "@reduxjs/toolkit";

const cartItems =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  cart: cartItems,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cart.map((item) => item))
      );
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
