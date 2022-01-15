import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        //  App Body
        <div className="app-body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;

// Firebase Authentication
// Go to redux template (feature/counter)
// Delete the counter.module.css
// In store.js change counterReducer to useReducer

// pulling the user from the data store
// use useSelector and pass in all slectors (selectUser is the one we created)
// Render a login page if there is no user otherwise render out the rest of the app
// create a Login component

// persisting our login
// Create a useEffect - when the app component loads we fire off a piece of code. Empty dependecy - only run once
// import auth from our local file bec I need my authentication. onAuthStateChanged - listener which goes ahead and listens to any sort of authentication change. userAuth comes through as a callback. If userAuth is there then the user is logged in else the user is logged out.
// If they were logged in dispatch them into the store -(dispatch login) dispatch a payload with that login
// When we refresh it dects that we are logged in and then it goes to app

// We need a way to logout - use the me button in the header
