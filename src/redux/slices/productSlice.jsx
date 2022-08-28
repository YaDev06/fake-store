import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getData: (state, { payload }) => {
      state.products = payload;
    },
  },
});
export const { getData } = productsSlice.actions;
export default productsSlice.reducer;
