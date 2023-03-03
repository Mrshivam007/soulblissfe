import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entity: {
    userType: localStorage.getItem("userType") || null,
    token: localStorage.getItem("token") || null,
  },
  status: {
    loading: false,
    error: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.entity.userType = action.payload.userType;
      state.entity.token = action.payload.token;
      localStorage.setItem("userType", action.payload.userType);
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.entity.userType = null;
      state.entity.token = null;
      localStorage.removeItem("userType");
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.entity;
export const selectCurrentUserType = (state) => state.auth.entity.userType;
export const selectCurrentToken = (state) => state.auth.entity.token;

export const selectCurrentStatus = (state) => state.auth.status;

export default authSlice.reducer;
