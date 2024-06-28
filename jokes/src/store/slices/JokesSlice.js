import { createSlice } from "@reduxjs/toolkit";
import { fetchJokes } from "../thunks/FetchJokes";

const jokesSlice = createSlice({
    name: "joke",
    initialState: {
        joke: "",
        error: null,
        loading: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchJokes.fulfilled, (state, action) => {
            state.loading = false;
            state.joke = action.payload;
        })
        builder.addCase(fetchJokes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })
        builder.addCase(fetchJokes.pending, (state, action) => {
            state.loading = true;  
        })
    }
})

export const jokesReducer =  jokesSlice.reducer