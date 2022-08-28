import { createSlice } from "@reduxjs/toolkit";
const initialState = { ByProductsId: [] };
const idProductSlice = createSlice({
  name: "idProduct",
  initialState,
  reducers: {
    get_product_by_id: (state, { payload }) => {
      state.ByProductsId = payload;
    },
  },
});
export const { get_product_by_id } = idProductSlice.actions;
export default idProductSlice.reducer;
