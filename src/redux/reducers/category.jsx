import { createReducer } from "@reduxjs/toolkit";
import { get_a_category } from "../actions/actions";

const initialState = {
  ByCategory: [],
};

// const category = createReducer(
//   initialState,
//   {
//     [get_a_category]: (state, action) => {
//       state.ByCategory = action.payload;
//     },
//   },
//   () => {}
// );

const category = createReducer(initialState, (builder) => {
  builder
    .addCase(get_a_category, (state, action) => {
      state.ByCategory = action.payload;
    })
    .addDefaultCase(() => {});
});
// const category = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "GET_A_CATEGORY": {
//       return {
//         ...state,
//         ByCategory: payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

export default category;
