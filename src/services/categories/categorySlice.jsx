import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   
    data: [],
    loading: false,
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
       
        getCategoryRequest(state) {
            state.loading = true;
        },
        getCategorySuccess(state, action) {
            state.loading = false;
            state.data = action.payload;
        },
        getCategoryFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
       
    },
});

export const {
    getCategoryRequest,
    getCategorySuccess,
    getCategoryFailure,
   
} = categorySlice.actions;

export  const categoryReducer = categorySlice.reducer;



