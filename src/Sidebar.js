import {Avatar} from "@mui/material";
import React from "react";
import "./Sidebar.css";
import Background from "./assets/Screenshot from 2021-12-29 16-51-56.png";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar-recentItem">
        <span className="sidebar-hashtag">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={Background} alt="" />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user.displayName[0]}
        </Avatar>
        {/* <h2>Jumba Mark</h2> */}
        <h2>{user.displayName}</h2>
        {/* <h4>jumbamark@yahoo.com</h4> */}
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2.543</p>
        </div>

        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">2.194</p>
        </div>
      </div>

      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("Web3")}
        {recentItem("Design")}
      </div>
    </div>
  );
}

export default Sidebar;

// Getting the user from the redux store
// use useSelector to get the user from the redux store
// Go to redux and check out what we got inside of the user variable.(State)
// In the Avator add src and make it not self closing (If it doesn't have a source use the first character in the displayName)

// Do the same for the header
