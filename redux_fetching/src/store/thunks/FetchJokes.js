import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchJoke = createAsyncThunk("jokes/fetch", async (params) => {
    console.log(params);
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
    return res.data
})

export {fetchJoke}