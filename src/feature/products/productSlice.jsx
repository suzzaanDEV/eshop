import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTerm: '',
    filteredCategory: 'all'
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        setFilterCategory: (state, action) => {
            state.filteredCategory = action.payload
        }
    }
})

export const { setProduct, setSearchTerm, setFilterCategory } = productSlice.actions;
export default productSlice.reducer;