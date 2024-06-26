import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        name: "",
        cost: 0
    },
    reducers: {
        changeCarName(state, action) {
            state.name = action.payload;
        },
        changeCarCost(state, action) {
            state.cost = action.payload;
        }
    }
})

export const {changeCarCost, changeCarName} = formSlice.actions
export {formSlice}