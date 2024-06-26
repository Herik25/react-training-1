// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/UsersSlice";
import jokesReducer from "./slices/JokeSlice"

const store = configureStore({
  reducer: {
    users: usersReducer,
    jokes: jokesReducer
  },
});

export default store;
