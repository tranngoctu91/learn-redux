import { call, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  getBlogFailure,
  getBlogRequest,
  getBlogSuccess,
  getTotalSuccess,
} from "./blogSlice";

function* handleGetBlogs(action) {
  try {
    debugger;
    const response = yield call(
      axios.post,
      "https://api.kinhnghiemdautu.net/api/blog/get-pagination",
      action.payload
    );
    const total = yield call(
      axios.post,
      "https://api.kinhnghiemdautu.net/api/blog/count-pagination",
      action.payload
    );
    yield put(getBlogSuccess(response.data));
    yield put(getTotalSuccess(total.data));
  } catch (error) {
    yield put(getBlogFailure(error));
  }
}

export default function* blogSaga() {
  yield takeLatest(getBlogRequest.type, handleGetBlogs);
}
