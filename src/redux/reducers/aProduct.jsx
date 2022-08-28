import { createReducer, createAction, createSlice } from "@reduxjs/toolkit";

export const get_product_by_id = createAction("GET_PRODUCT_BY_ID");

export const addComment = createAction("ADD_COMMENT");

export const get_name = createAction("GET_NAME");

export const get_comment = createAction("GET_COMMENT");

export const setComments = createAction("SET_COMMENTS");

const initialState = {
  ByProductsId: [],
  comments: [],
  name: "",
  comment: "",
};

const aProduct = createReducer(initialState, (builder) => {
  builder
    .addCase(get_product_by_id, (state, action) => {
      state.ByProductsId = action.payload;
    })
    .addCase(get_name, (state, action) => {
      state.name = action.payload;
    })
    .addCase(get_comment, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments = [...state.comments, action.payload];
      state.name = "";
      state.comment = "";
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addDefaultCase(() => {});
});

export default aProduct;
