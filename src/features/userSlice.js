import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

// Selectors - allows us to pull the user from memo
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

// Change counterSlice to userSlice
// change counter to user (name)
// Have user as an object in initialState with an initial value of null
// Reducers have functions which allow us to manipulate the state
// Delete extraReducers
// Delete const incrementIfOdd
// Change selectCount to selectUser and count.value to user.value - will allow us to pull from the data whenever we need (we gonna pull from the userSlice and we gonna pull the user variable from the user slice)

// We can  have different slices of state for different purposes i.e themeSlice (darkMode: boolean)

// Under reducer we set a login and a logout action;
// When you have an action you get the state(actual state of the slice). When we logout we set the user back to null,
// When we login we should get an action and the user should go ahead and do the following: action.payload (payload is basically an object that we pass along with it)
// export the login and logout

// Now we've got everything set up
// Go to devTools and select redux > State - the user is currently null

// Proceed with login page
// Go to app.js and pull the user from the data store
