import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/configAxios.js";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async (_, rejectWithValue) => {
    try {
      const response = await axios.get("/api/product");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchProducts_mainpage = createAsyncThunk(
  "products/fetchProducts_mainpage",
  async ({ category_id1, category_id2 }, { _, rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/api/product_mainpage?category_id1=${category_id1}&category_id2=${category_id2}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    products_mainpage: {
      loading: false,
      products: {},
    },
    products_page: {
      loading: false,
      products: {},
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.products_page.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products_page.loading = false;
        state.products_page.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.products_page.loading = false;
      })
      .addCase(fetchProducts_mainpage.pending, (state) => {
        state.products_mainpage.loading = true;
      })
      .addCase(fetchProducts_mainpage.fulfilled, (state, action) => {
        state.products_mainpage.loading = false;
        state.products_mainpage.products = action.payload;
      })
      .addCase(fetchProducts_mainpage.rejected, (state) => {
        state.products_mainpage.loading = false;
      });
  },
});
export default productSlice.reducer;
