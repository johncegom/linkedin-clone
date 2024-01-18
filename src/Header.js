import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedIn from "./assets/linkedin.svg";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={LinkedIn} alt="" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatBubbleIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://avatars.steamstatic.com/102120263678e0acf24842b6db5424c730ac038b_full.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
