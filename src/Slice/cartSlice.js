import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    unincreaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    },
    increaseQuantity: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.price;
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  unincreaseQuantity,
  increaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
