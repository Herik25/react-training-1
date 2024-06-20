import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";

const songSlice = createSlice({
    name: "song",
    // song + / + addSong = song/addSong
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload)
        },
        removeSong: (state, action) => {
            // 
        }
    }
})

const store = configureStore({
    reducer: {
        song: songSlice.reducer
    }
})

// console.log(songSlice.actions.addSong());

// const initialState = store.getState()
// console.log(initialState);

// store.dispatch({
//     type: "song/addSong",
//     payload: {
//         name: "good song",
//     }
// })

// store.dispatch(songSlice.actions.addSong("asddgdsa"));

// const finaleState = store.getState()
// console.log(finaleState);

export {store};

export const {addSong, removeSong} = songSlice.actions