import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets-article">
        <div className="widget-articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widget-articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Christiano Ronaldo", "Football")}
      {newsArticle("Tesla hits new high", "Automotive - 65453 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto - 572865 readers")}
    </div>
  );
}

export default Widgets;

// get the InfoIcon from the react material UI
// An article writing section (Article left and article right)
// Create a newsArticle function which returns jsx
// Use the newsArticle function to return lots of jsx in a nice little way
