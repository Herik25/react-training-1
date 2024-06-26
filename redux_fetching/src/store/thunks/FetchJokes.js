import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FetchJokes = createAsyncThunk("jokes/fetch", async () => {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
    console.log(res.data);
    return res.data;
})

export {FetchJokes}