import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSongs(state, action) {
      state.push(action.payload);
    },
    removeSongs(state, action) {},
  },
});
const store = configureStore({
  reducer: {
    song: songSlice.reducer,
  },
});

export const { addSongs, removeSongs } = songSlice.actions;
export { store }