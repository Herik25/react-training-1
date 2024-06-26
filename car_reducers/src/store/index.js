import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./slices/CarSlice";
import { formSlice } from "./slices/FormSlice";

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    form: formSlice.reducer
  }
})

export {store}