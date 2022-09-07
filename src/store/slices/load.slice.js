import { createSlice } from "@reduxjs/toolkit";

export const loading = createSlice({
  name: "loading",
  initialState: "",
  reducers: {
    setLoading: (state, action) => action.payload,
  },
});
export const { setLoading } = loading.actions;

export default loading.reducer;
