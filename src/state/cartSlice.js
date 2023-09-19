import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
    }
});

export const { setItems, setIsCartOpen } = cartSlice.actions;

export default cartSlice.reducer