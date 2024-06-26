import { configureStore, createAction, createSlice, createStore } from "@reduxjs/toolkit";

export const reset = createAction("app/reset")

const songSlice = createSlice({
    name: "song",
    // song + / + addSong = song/reset
    initialState: [],
    reducers: {
        addSong: (state, action) => {
            state.push(action.payload)
        },
        removeSong: (state, action) => {
            // 
        }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
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