import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productsReducer from "./reducers/products";
import filterReducer from "./reducers/filter";

const rootReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispath = typeof store.dispatch;

export default store;
