import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { countReducer } from "./counterSlice";
import { globalReducer } from "./globalSlice";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers({
  counter: countReducer,
  global: globalReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});
store.subscribe(() => {
  console.log(store.getState().counter.count);
});
export default store;
