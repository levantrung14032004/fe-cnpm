import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../config/configAxios";

export const check_status = createAsyncThunk(
  "status",
  async (_, rejectWithValue) => {
    try {
      const response = await axios.post("/auth/checkLogin");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const statusSlice = createSlice({
  name: "status",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(check_status.pending, (state) => {
        state.loading = true;
      })
      .addCase(check_status.fulfilled, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      })
      .addCase(check_status.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default statusSlice.reducer;
