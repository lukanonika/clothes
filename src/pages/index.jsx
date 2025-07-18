import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/CartBrain.jsx";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
 });
