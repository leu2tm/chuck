import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const client = axios.create({
  baseURL: "https://api.chucknorris.io",
});

const initialState = {
  joke: {},
};

export const fetchJoke = createAsyncThunk("chuck/fetchJoke", async () => {
  const response = await client.get("/jokes/random");
  return response.data;
});

const chuckSlice = createSlice({
  name: "chuck",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJoke.fulfilled, (state, action) => {
      state.joke = { ...state.joke, ...action.payload };
      if (!state.ids) {
        state.ids = [action.payload.id];
      } else if (!state.ids.includes(action.payload.id)) {
        state.ids.push(action.payload.id);
      }
    });
  },
});

export const getJoke = (state) => state.chuck.joke;

export const getNumberOfJokes = (state) => state.chuck.ids || [];

export default chuckSlice.reducer;
