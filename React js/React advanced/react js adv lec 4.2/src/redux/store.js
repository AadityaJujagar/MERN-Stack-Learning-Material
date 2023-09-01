import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

export default configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
