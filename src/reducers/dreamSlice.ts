import { createSlice } from "@reduxjs/toolkit";
import { Dream } from "../models/Dream";

type AddAction = (state: { dreams: Dream[] }, { payload }: { payload: Dream }) => void;

export const dreamSlice = createSlice<{
  dreams: Dream[]
}, {
  add: AddAction,
}, "dreamSlice">({
  name: "dreamSlice",
  initialState: {
    dreams: [],
  },
  reducers: {
    add: (state, { payload }) => {
      state.dreams.push({ id: new Date().getTime(), ...payload });
    },
  },
});

export const { add } = dreamSlice.actions;

export default dreamSlice.reducer;
