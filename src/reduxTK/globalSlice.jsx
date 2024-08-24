import { createSlice } from "@reduxjs/toolkit";
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, actions) => {
      return {
        ...state,
        darkMode: actions.payload,
      };
    },
  },
});

export const { toggleDarkMode } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
