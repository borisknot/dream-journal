import { createSlice } from "@reduxjs/toolkit";
import { Dream } from "../models/Dream";

export const dreamSlice = createSlice<{ dreams: Dream[] }, {}, "dreamSlice">({
  name: "dreamSlice",
  initialState: {
    dreams: [],
  },
  reducers: {},
});


export default dreamSlice.reducer;
