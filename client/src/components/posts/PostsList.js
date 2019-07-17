import React from "react";
import PostComponent from "./PostComponent";
import { Typography } from "@material-ui/core";

export function PostsList({ posts = [], img = "", text = "" }) {
  return posts.length > 0 ? (
    posts.map(post => <PostComponent key={post._id} post={post} />)
  ) : (
    <div
      style={{
        width: "50%",
        margin: "auto",
        textAlign: "center",
        marginTop: 100
      }}
    >
      <img width="50%" src={img} alt={text + " image"} />
      <Typography style={{ marginTop: 20 }} variant="button" component="h1">
        {text}
      </Typography>
    </div>
  );
}
