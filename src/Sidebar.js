import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.cloudflareapps.com/juNvIegSsixME6FSF01f_background-4.jpeg"
          alt="avatar background"
        />
        <Avatar className="sidebar__avatar" src={user.photoURL}>
          {user.email[0].toUpperCase()}
        </Avatar>
        <a href="./" className="sidebar__welcomeTitle">
          Welcome, {user.displayName}!
        </a>
        <a href="./" className="sidebar__extraTitle">
          Add a photo
        </a>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Profile viewers</p>
          <p className="sidebar__statNumber">19</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">160</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("frontenddeveloper")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
