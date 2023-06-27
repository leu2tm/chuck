import { configureStore } from "@reduxjs/toolkit";
import chuckSlice from "./ChuckSlice";

export default configureStore({
  reducer: {
    chuck: chuckSlice,
  },
});
