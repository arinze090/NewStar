// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  registerUser: null,
  userLanguage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    registerUser: (state, action) => {
      state.registerUser = action.payload;
    },
    signOutUser: (state, action) => {
      state.user = null;
    },
    setUserLanguage: (state, action) => {
      state.userLanguage = action.payload;
    },
    clearUserLanguage: (state, action) => {
      state.userLanguage = null;
    },
  },
});

export const {
  getUser,
  signOutUser,
  registerUser,
  setUserLanguage,
  clearUserLanguage,
} = userSlice.actions;
export default userSlice.reducer;
