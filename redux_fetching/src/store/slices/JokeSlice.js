import { createSlice } from "@reduxjs/toolkit";
import { fetchJoke } from "../thunks/FetchJokes";

const jokesSlice = createSlice({
  name: "jokes",
  initialState: {
    jokes: "",
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.jokes = action.payload;
        state.pending = false;
      })
      .addCase(fetchJoke.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const jokesReducer = jokesSlice.reducer;
