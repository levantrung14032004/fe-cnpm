import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice.js";
import productReducer from "./Slice/products.js";
export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});
