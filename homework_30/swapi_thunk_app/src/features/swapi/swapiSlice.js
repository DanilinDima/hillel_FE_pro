import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPerson = createAsyncThunk(
  "swapi/fetchPerson",
  async (endpoint, thunkAPI) => {
    const BASE_URL = "https://swapi.py4e.com/api/";
    const response = await fetch(BASE_URL + endpoint);
    if (!response.ok) {
      throw new Error("Failed to fetch data: " + response.status);
    }
    return await response.json();
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {
    clearData(state) {
      state.data = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerson.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPerson.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchPerson.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.data = null;
      });
  },
});

export const { clearData } = swapiSlice.actions;
export default swapiSlice.reducer;
