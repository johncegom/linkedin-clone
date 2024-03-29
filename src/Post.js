import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendIcon from "@mui/icons-material/Send";
import RepeatIcon from "@mui/icons-material/Repeat";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" />
        <InputOption Icon={RepeatIcon} title="Repost" />
        <InputOption Icon={SendIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;
