import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice.js";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
