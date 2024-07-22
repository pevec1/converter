import { configureStore } from "@reduxjs/toolkit";
import valueReducer from "../slices/sliceValute";

export default configureStore({
  reducer: {
    value: valueReducer,
  },
});
