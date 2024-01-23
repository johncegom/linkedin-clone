import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.email[0].toUpperCase()}
        </Avatar>
      )}
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
