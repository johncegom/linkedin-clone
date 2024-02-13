import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("How to apply new job?", "MAK - 225 readers")}
      {newsArticle("Is there good tech out there?", "Top news - 521 readers")}
      {newsArticle("Redux or Context", "Code - 617 readers")}
      {newsArticle("Tailwind is what you need!", "CSS Guru - 1555 readers")}
    </div>
  );
}

export default Widgets;
