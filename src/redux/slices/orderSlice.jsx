import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrderedItem: (state, { payload }) => {
      state.order = [...state.order, payload];
    },
    filterFromCart: (state, { payload }) => {
      state.order = state.order.filter((item) => item.id !== payload.id);
    },
    setOrder: (state, { payload }) => {
      state.order = payload;
    },
  },
});
export const { getOrderedItem, filterFromCart, setOrder } = orderSlice.actions;
export default orderSlice.reducer;
