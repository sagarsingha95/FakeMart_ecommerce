import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/productsSlice'
import { apiSlice } from "../features/apiSlice";
import usersReducer from '../features/userSlice';
import cartsReducer from '../features/cartSlice';
export const store = configureStore({
    reducer:{
        products:productsReducer,
        users:usersReducer,
        [apiSlice.reducerPath]:apiSlice.reducer,
        cart:cartsReducer
    },
    middleware:(getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(apiSlice.middleware)
})

