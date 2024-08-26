import { all } from 'redux-saga/effects';
import authSaga from './services/auths/authSaga';
import categorySaga from './services/categories/categorySaga';
import blogSaga from './services/blogs/blogSaga';




export default function* rootSaga() {
  yield all([
    authSaga(),
    categorySaga(),
    blogSaga()
  ]);
}