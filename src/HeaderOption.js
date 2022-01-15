import {Avatar} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import "./HeaderOption.css";

function HeaderOption({title, Icon, avatar, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption-icon" />}
      {/* {avatar && <Avatar className="headerOption-icon" src={avatar} />} */}
      {avatar && (
        <Avatar className="headerOption-icon" src={user?.photoUrl}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

// Icon is capital because it's gonna be a component that I pass in (material UI icon)
// If I pass in an Icon, only then should I render the icon itself as a component

// Pass in an onClick function to make it customizable - (to be used on the Me button for logout)

// passing in the avatoar from the redux store
// src will be (optional chaining bec the user may not exist in the beginning) photoUrl, make it self enclosing (If you dont have a pic it uses the first char of displayName)
// Make it so that we have avatar as a boolean inside of the Header bec we dont always wanna render it
