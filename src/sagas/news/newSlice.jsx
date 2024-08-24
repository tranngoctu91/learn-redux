import { createSlice } from "@reduxjs/toolkit";
const newSlice = createSlice({
  name: "news",
  initialState: {
    hits: [],
    loading: true,
    error: "",
  },
  reducers: {
    setNews: (state, action) => ({
      ...state,
      hits: action.payload,
    }),

    getNews() {},
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
});
export const { setNews, getNews, setLoading } = newSlice.actions;
export const newsReducer = newSlice.reducer;
