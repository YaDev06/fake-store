import { createReducer } from "@reduxjs/toolkit";
import {
  addComment,
  get_comment,
  get_name,
  get_product_by_id,
  setComments,
} from "../actions/actions";

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
