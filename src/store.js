import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice.js";
import productReducer from "./Slice/products.js";
import loginReducer from "./Slice/loginSlice.js";
import statusReducer from "./Slice/status.js";
export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    login: loginReducer,
    status: statusReducer,
  },
});
