import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { getCategorySuccess, getCategoryFailure, getCategoryRequest } from './categorySlice';



function* handleGetCategories(action) {
 
    try {
  
        const response = yield call(axios.get, 'https://api.kinhnghiemdautu.net/api/blogcategory');
        yield put(getCategorySuccess(response.data));
    } catch (error) {
        yield put(getCategoryFailure(error));
    }
}



export default function* categorySaga() {

    yield takeLatest(getCategoryRequest.type, handleGetCategories);

}
