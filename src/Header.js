import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import linkedIn from "./assets/linkedin.png";
// import Mark from "./assets/mark.jpg";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {useDispatch} from "react-redux";
import {logout} from "./features/userSlice";
import {auth} from "./firebase";

function Header() {
  // const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src={linkedIn} alt="" />

        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        {/* <HeaderOption avatar={user.photoUrl} title="Me" onClick={logoutOfApp} /> */}
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;

// create a logout function - dispatch a logout function and log us out of firebase
// We need the dispatch, tell redux that I logged out (logs me out on the frontend UI)
// use auth with the signOut function
// Pass the function through the Me button

// Getting the values from redux store - do it in the headerOption
