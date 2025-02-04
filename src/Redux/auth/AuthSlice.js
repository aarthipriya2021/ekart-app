import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const validUsers = [
  { email: "admin@test.com", password: "admin" },
  { email: "user@example.com", password: "userpass" },
];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;

      const userExists = validUsers.find(
        (user) => user.email === email && user.password === password
      );

      if (userExists) {
        state.user = { email };
        localStorage.setItem("user", JSON.stringify({ email })); // Store user in localStorage
      } else {
        alert("Invalid email or password"); // Show alert
        return; // Prevent state update if credentials are wrong
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // Remove user from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
