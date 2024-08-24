import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 10,
  },
  reducers: {
    increment: (state, actions) => ({
      ...state,
      count: state.count + actions.payload.value,
    }),
  },
});

export const { increment } = counterSlice.actions;
export const countReducer = counterSlice.reducer;
