import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    signIn: (state, action) => action.payload,
    signOut: (state, action) => null,
  },
});

export const { signIn, signOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
