import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart';

// This will be the place to configure and manage the entire redux store 

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        // user ...
    }
})