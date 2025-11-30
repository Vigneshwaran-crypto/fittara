import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RECEIVED_ACTION } from "../Common/Constant";
import {
  ALL_ORDERS,
  MODIFIED_MESH,
  PATH_NAME,
  SAVE_USER,
  SHOP_DETAILS,
} from "./Types";

export const reduxStore = createAsyncThunk(
  RECEIVED_ACTION,
  async (action, { dispatch, getState, rejectWithValue }) => {
    return action;
  }
);

const initialState = {
  loading: false,
  user: {},
  shop: {},
  allOrders: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(reduxStore.pending, (state, { payload }) => {});

    builder.addCase(reduxStore.fulfilled, (store, { payload }) => {
      console.log("payload", payload);
      if (payload) {
        switch (payload.type) {
          case SAVE_USER:
            store.user = payload.data;
            break;

          case SHOP_DETAILS:
            store.shop = payload.data;
            break;

          case ALL_ORDERS:
            store.allOrders = payload.data;
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
