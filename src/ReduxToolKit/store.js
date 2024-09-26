import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./MainSlice";

const store = configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: (getDefault) => getDefault({ serializableCheck: false }),
});

export default store;
