import React, {useState} from "react";
import "./Login.css";
import logo from "./assets/linkedin-logo.png";
import {auth} from "./firebase";
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic, // our url bec I've changed the casing
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img src={logo} alt="" />

      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;

//  For the login - import the auth module that I prepared in the firebase file
// Bec this is a form we pass in an event (dont want it refresh)

// Do the register functionality first
// Full name is required if we register
// How do we know there is a name - we need to track it with state (create states for all of them)
// Map them to the appropriate fields
// In register; If there's no name return an alert
// In the register section; use firebase(auth) to create a user with email and password (pass in the email and the password) and it creates it on the backend
// If it is succesful(once we've got the user created) then go into the user and update their profile (we want to add apicture to their account based on the stuff that we entered during the login flow)
// Go ahead and map to displayName and photoURL(keys that refer to firebase)
// we then go ahead and dispatch a login(push the user at this point into the redux store) - use the useDispatch hook from react-redux
// Dispatch , log in(import login from userSlice) - the email is gonna be the user authentication (when we get it back it gives a user object)...photoUrl will be the profile pic
// If anything goes wrong at any of this points we then say catch (alert the error)

// Once we've created an account the user will no longer be empty if we set everything up correctly
// DevTools > Redux (The Action we dispatched had a payload of email and all the contents inside the user form),State got affected by that bec we dispatched a login action,Diff - shows we went from null to the user being present

// Refresh - taken back to the login page
// How we persist our login
// Go to app.js and create a useEffect

// Working on the login flow after register flow
//use auth and sign in with email and password
// then get a userAuth object, dispatch into redux

// We dispatched the user info into redux store, we can go ahead and customize it accordingly - go to sidebar and start pulling in the info you want
// Get the user from the redux store in sidebar
