import { createSlice } from "@reduxjs/toolkit";
import { FetchJokes } from "../thunks/FetchJokes";

const jokeSlice = createSlice({
    name: "joke",
    initialState: {
        joke: "",
        loading: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase("jokes/fetch".pending, (state) => {
                state.loading = true;
            })
           .addCase(FetchJokes.fulfilled, (state, action) => {
                state.loading = false;
                state.joke = action.payload;
            })
           .addCase(FetchJokes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }

})

export default jokeSlice.reducer;