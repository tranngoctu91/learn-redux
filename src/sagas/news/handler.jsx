import { call, put } from "redux-saga/effects";
import requestGetNews from "./request";
import { setLoading, setNews } from "./newSlice";

export default function* handlerGetNews(action) {
  try {
    const response = yield call(requestGetNews);
    const { hits } = response.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
