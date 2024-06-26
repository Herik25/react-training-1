import { configureStore } from "@reduxjs/toolkit";
import {
  addCar,
  carsReducer,
  changeSearchTerm,
  removeCar,
} from "./slices/CarSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { changeName, changeCost, changeSearchTerm, store, addCar, removeCar };
