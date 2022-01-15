import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// change; counterReducer to userReducer, counterSlice to userSlice and counter to user (user is gonna have a user slice which is gonna pull from userReducer)
// Get rid of counter.js
// Rename the files (counterSlice to userSlice)
// Go to user slice and replace counterSlice words (3) to userSlice
