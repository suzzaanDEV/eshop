import { createSlice } from "@reduxjs/toolkit";


const loadCartItems = () => {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
};

const initialState = {
    cartItems: loadCartItems() // Initialize cartItems from localStorage
};


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const {id, title, price} = action.payload;
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                // If item exists, increment its quantity
                existingItem.quantity += 1;
            } else {
                // If item doesn't exist, add it to the cartItems array with quantity 1
                state.cartItems.push({id, title, price, quantity: 1});
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        removeFromCart: (state, action) => {
            // Corrected usage to update state immutably
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
