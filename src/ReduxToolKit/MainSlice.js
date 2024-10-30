import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RECEIVED_ACTION } from "../Common/Constant";
import { MODIFIED_MESH, SAVE_USER } from "./Types";

export const reduxStore = createAsyncThunk(
  RECEIVED_ACTION,
  async (action, { dispatch, getState, rejectWithValue }) => {
    return action;
  }
);

const initialState = {
  loading: false,
  user: {},
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(reduxStore.pending, (state, { payload }) => {});

    builder.addCase(reduxStore.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      if (payload) {
        switch (payload.type) {
          case SAVE_USER:
            state.user = payload.data;
            break;

          default:
            console.log("Default hitted in MainSlice");
            break;
        }
      }
    });

    builder.addCase(reduxStore.rejected, (state, action) => {
      console.log("reduxStore.rejected");
    });
  },
});

const mainReducer = mainSlice.reducer;

export default mainReducer;
