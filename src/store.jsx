import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { authReducer } from './services/auths/authSlice';
import rootSaga from './rootSaga';
import { categoryReducer } from './services/categories/categorySlice';
import { blogReducer } from './services/blogs/blogSlice';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        blog: blogReducer
    },
    middleware:  (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;