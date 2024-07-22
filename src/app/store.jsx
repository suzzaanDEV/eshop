// store.js

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from '../feature/products/productSlice';
import cartReducer from '../feature/products/cartSlice';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
