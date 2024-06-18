import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/products/productSlice'

export const store = configureStore({
    reducer: {
        products: productReducer
    }
})