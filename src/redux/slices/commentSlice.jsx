import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
  name: "",
  comment: "",
};
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, { payload }) => {
      state.comments = [...state.comments, payload];
      state.name = "";
      state.comment = "";
    },
    get_name: (state, { payload }) => {
      state.name = payload;
    },
    get_comment: (state, { payload }) => {
      state.comment = payload;
    },
    setComments: (state, { payload }) => {
      state.comments = payload;
    },
  },
});

export const { addComment, get_name, get_comment, setComments } =
  commentSlice.actions;
export default commentSlice.reducer;
