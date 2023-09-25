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

        addToCart: (state, action) => {
            state.cart = [...state.cart, action.payload.item];
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },

        increaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id) {
                    item.count++
                }
                return item;
            })
        },

        decreaseQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if(item.id === action.payload.id && item.count > 1) {
                    item.count--
                }
                return item;
            })
        },

    }
});

export const { setItems, setIsCartOpen, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer