import { configureStore } from '@reduxjs/toolkit';
import products from './reducers/products';
import category from './reducers/category';
import aProduct from './reducers/aProduct';

export const store = configureStore({
    reducer: {
        products,
        category,
        aProduct
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});