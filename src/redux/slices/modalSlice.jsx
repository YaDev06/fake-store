import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  modal: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { changeModal } = modalSlice.actions;
export default modalSlice.reducer;
