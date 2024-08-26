import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    data: [],
    total: 0,
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getBlogRequest(state, action) {
            state.loading = true;
        },
        getBlogSuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        getBlogFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },

        getTotal() { },
        getTotalSuccess(state, action) {

            state.total = action.payload;
        },
        getTotalFailure(state, action) {
            state.error = action.payload;
        },

    },
});

export const {
    getBlogRequest,
    getBlogSuccess,
    getBlogFailure,
    getTotal,
    getTotalFailure,
    getTotalSuccess

} = blogSlice.actions;

export const blogReducer = blogSlice.reducer;
