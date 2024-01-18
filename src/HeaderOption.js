import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <div className="headerOption__userInformation">
        <h3 className="headerOption__title">{title}</h3>
        {title === "Me" ? (
          <ArrowDropDownIcon className="headerOption__icon--small" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default HeaderOption;
