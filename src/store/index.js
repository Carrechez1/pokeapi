import { configureStore } from "@reduxjs/toolkit";
import nameTrainer from "./slices/nameTrainer.slice";
import loading from "./slices/load.slice";
export default configureStore({
  reducer: {
    nameTrainer,
    loading,
  },
});
