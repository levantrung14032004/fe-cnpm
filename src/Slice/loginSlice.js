import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/configAxios.js";

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, { _, rejectWithValue }) => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    error: null,
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.error = action.payload.error;
        // window.location.href = "/";
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default loginSlice.reducer;
