import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("http://localhost:3005/users");
  return res.data
});

export {fetchUser}