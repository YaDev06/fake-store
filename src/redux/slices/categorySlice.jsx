import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ByCategory: [],
};
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    get_a_category: (state, { payload }) => {
      state.ByCategory = payload;
    },
  },
});
export const { get_a_category } = categorySlice.actions;
export default categorySlice.reducer;
