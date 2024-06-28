import { configureStore } from "@reduxjs/toolkit";
import { jokesReducer } from "./slices/JokesSlice";

const store = configureStore({
  reducer: {
    jokes: jokesReducer,
  },
});

export default store;
