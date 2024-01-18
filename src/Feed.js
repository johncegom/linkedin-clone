import React from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputBody">
          <Avatar
            className="feed__avatar"
            src="https://avatars.steamstatic.com/102120263678e0acf24842b6db5424c730ac038b_full.jpg"
          />
          <div className="feed__input">
            <form>
              <input type="text" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title={"Media"} color="#378FE9" />
          <InputOption
            Icon={CalendarMonthIcon}
            title={"Event"}
            color="#C37D16"
          />
          <InputOption
            Icon={ArticleIcon}
            title={"Write Article"}
            color="#E06847"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
