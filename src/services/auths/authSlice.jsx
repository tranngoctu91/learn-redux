import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   
    token: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest(state) {
            state.loading = true;
        },
        loginSuccess(state, action) {
            state.loading = false;
            state.token = action.payload.token;
        },
        loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        registerRequest(state) {
            state.loading = true;
        },
        registerSuccess(state, action) {
            state.loading = false;
        },
        registerFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.token = null;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure,
    logout,
} = authSlice.actions;

export  const authReducer = authSlice.reducer;
