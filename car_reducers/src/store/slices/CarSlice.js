import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: "car",
    initialState: {
        cars: []
    },
    reducers: {
        removeCar(state, action) {
            //
        },
        addCar(state, action) {
            //
        }
    }
})

export const { removeCar, addCar } = carSlice.actions;
export const carsSlice = carSlice