import { createReducer } from "@reduxjs/toolkit";
import {
  changeModal,
  filterFromCart,
  getData,
  getOrderedItem,
  setOrder,
} from "../actions/actions";

const initialState = {
  products: [],
  modal: false,
  order: [],
};

// const products = createReducer(
//   initialState,
//   {
//     [getData]: (state, { payload }) => {
//       state.products = payload;
//     },

//     [changeModal]: (state) => {
//       state.modal = !state.modal;
//     },

//     [getOrderedItem]: (state, { payload }) => {
//       state.order = state.order.push(payload);
//     },
//     [filterFromCart]: (state,{payload})=>{
//       state.order = state.order.filter(s=>s.id !== payload.id)
//     },
//     [setOrder]: (state, { payload }) => {
//       state.order = payload;
//     },
//   },
//   () => {}
// );

const products = createReducer(initialState, (builder) => {
  builder
    .addCase(getData, (state, { payload }) => {
      state.products = payload;
    })
    .addCase(changeModal, (state) => {
      state.modal = !state.modal;
    })
    .addCase(getOrderedItem, (state, { payload }) => {
      state.order = state.order.push(payload);
    })
    .addCase(filterFromCart, (state, { payload }) => {
      state.order = state.order.filter((s) => s.id !== payload.id);
    })
    .addCase(setOrder, (state, { payload }) => {
      state.order = payload;
    })
    .addDefaultCase(() => {});
});

// const products = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "GET_PRODUCTS": {
//       return {
//         ...state,
//         products: payload,
//       };
//     }

//     case "CHANGE_MODAL": {
//       return {
//         ...state,
//         modal: !state.modal,
//       };
//     }

//     case "GET_ORDERED_ITEM": {
//       const index = state.order.findIndex((e) => e.id === payload.id);

//       let newMass = null;
//       if (index < 0) {
//         const newOrder = {
//           ...payload,
//           quantity: 1,
//         };
//         newMass = [...state.order, newOrder];
//       } else {
//         newMass = state.order.map((value, idx) => {
//           if (idx === index) {
//             return {
//               ...value,
//               quantity: value.quantity + 1,
//             };
//           } else {
//             return value;
//           }
//         });
//       }
//       return {
//         ...state,
//         order: newMass,
//       };
//     }

//     case "FILTER_FROM_CART": {
//       return {
//         ...state,
//         order: state.order.filter((item) => item.id !== payload.id),
//       };
//     }

//     case "SET_ORDER": {
//       return {
//         ...state,
//         order: payload,
//       };
//     }

//     default:
//       return state;
//   }
// };

export default products;
