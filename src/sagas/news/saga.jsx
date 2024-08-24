import { takeEvery, takeLatest } from "redux-saga/effects";
import { getNews } from "./newSlice";
import handlerGetNews from "./handler";

// watcher
export default function* newsSaga() {
  yield takeLatest(getNews.type, handlerGetNews);
}
