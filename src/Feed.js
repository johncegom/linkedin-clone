import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import ArticleIcon from "@mui/icons-material/Article";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Minh Duong",
      description: "Software Engineer",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

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
              <input
                value={input}
                type="text"
                onChange={(e) => setInput(e.target.value)}
                placeholder="Start a post"
              />
              <button onClick={sendPost} type="submit">
                Send
              </button>
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
            title={"Write article"}
            color="#E06847"
          />
        </div>
      </div>

      {/* Post */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      <Post
        name="Minh Duong"
        description="This is a test"
        message="Wow this worked"
        photoUrl="https://avatars.steamstatic.com/102120263678e0acf24842b6db5424c730ac038b_full.jpg"
      />
    </div>
  );
}

export default Feed;
