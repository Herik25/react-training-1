import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchJokes = createAsyncThunk("jokes/fetch",  async () => {
    const res = await axios.get("https://official-joke-api.appspot.com/random_joke").then(res => res.data)
    return res
})

export {fetchJokes}