import { createAction } from "@reduxjs/toolkit";

// Root

export const changeModal = createAction("CHANGE_MODAL")

export const setOrder = createAction("SET_ORDER");

export const getOrderedItem = createAction("GET_ORDERED_ITEM");

export const filterFromCart = createAction("FILTER_FROM_CART");

// products

export const getData = createAction("GET_PRODUCTS");

// category

export const get_a_category = createAction("GET_A_CATEGORY");

// product by id

export const get_product_by_id = createAction("GET_PRODUCT_BY_ID");

export const addComment = createAction("ADD_COMMENT");

export const get_name = createAction("GET_NAME");

export const get_comment = createAction("GET_COMMENT");

export const setComments = createAction("SET_COMMENTS");