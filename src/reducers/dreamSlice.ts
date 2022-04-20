import { createSlice } from "@reduxjs/toolkit";
import { Dream } from "../models/Dream";

type AddAction = (state: { dreams: Dream[] }, { payload }: { payload: Dream }) => void;
type UpdateAction = (state: { dreams: Dream[] }, { payload }: { payload: Dream }) => void;
type RemoveAction = (state: { dreams: Dream[] }, { payload }: { payload: { id: number } }) => void;

export const dreamSlice = createSlice<{
  dreams: Dream[]
}, {
  add: AddAction,
  update: UpdateAction,
  remove: RemoveAction,
}, "dreamSlice">({
  name: "dreamSlice",
  initialState: {
    dreams: [],
  },
  reducers: {
    add: (state, { payload }) => {
      state.dreams.push({ id: new Date().getTime(), ...payload });
    },
    update: (state, { payload }) => {
      const dream = state.dreams.find(dream => dream.id === payload.id);
      Object.assign(dream, payload);
    },
    remove: (state, { payload }) => {
      const dreams = state.dreams.filter(dream => dream.id !== payload.id);
      state.dreams = dreams;
    },
  },
});

export const { add, update, remove } = dreamSlice.actions;

export default dreamSlice.reducer;
