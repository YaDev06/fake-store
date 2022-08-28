import { createSlice, createReducer, createAction } from "@reduxjs/toolkit";
export const getData = createAction("GET_PRODUCTS");
export const changeModal = createAction("CHANGE_MODAL");

export const setOrder = createAction("SET_ORDER");

export const getOrderedItem = createAction("GET_ORDERED_ITEM");

export const filterFromCart = createAction("FILTER_FROM_CART");

const initialState = {
  products: [],
  modal: false,
  order: [],
};

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(getData, (state, { payload }) => {
      state.products = payload;
    })
    .addCase(changeModal, (state) => {
      state.modal = !state.modal;
    })
    .addCase(getOrderedItem, (state, { payload }) => {
      state.order = [...state.order, payload];
    })
    .addCase(filterFromCart, (state, { payload }) => {
      state.order = state.order.filter((s) => s.id !== payload.id);
    })
    .addCase(setOrder, (state, { payload }) => {
      state.order = payload;
    })
    .addDefaultCase(() => {});
});

export default products;
