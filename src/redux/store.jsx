import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import commentSlice from "./slices/commentSlice";
import idProductSlice from "./slices/idProductSlice";
import modalSlice from "./slices/modalSlice";
import orderSlice from "./slices/orderSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    categorySlice,
    commentSlice,
    idProductSlice,
    modalSlice,
    orderSlice,
    productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
