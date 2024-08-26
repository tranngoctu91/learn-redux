import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure, registerRequest, registerSuccess, registerFailure } from './authSlice';

// Selector để lấy token từ state
const selectToken = (state) => state.auth.token;

function* handleLogin(action) {
    try {

        const response = yield call(axios.post, 'https://api.kinhnghiemdautu.net/api/account/login', action.payload);
        const { message } = response.data;

        localStorage.setItem('jwtToken', message);

        yield put(loginSuccess({ token: message }));
    } catch (error) {
        yield put(loginFailure(error.response.data.message));
    }
}

function* handleRegister(action) {
    try {

        const token = yield select(selectToken);
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        yield call(axios.post, 'https://api.kinhnghiemdautu.net/api/account/add', action.payload, config);

        yield put(registerSuccess());
    } catch ({ response }) {
        yield put(registerFailure(response.data));
    }
}

export default function* authSaga() {
    yield takeLatest(loginRequest.type, handleLogin);
    yield takeLatest(registerRequest.type, handleRegister);
}
