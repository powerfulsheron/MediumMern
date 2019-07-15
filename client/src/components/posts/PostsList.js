import React from "react";
import PostComponent from "./PostComponent";
import { Typography } from "@material-ui/core";

export function PostsList({ posts = [] }) {
  return posts.length > 0 ? (
    posts.map(post => <PostComponent key={post._id} post={post} />)
  ) : (
    <Typography variant="body1">No post in bookmarks</Typography>
  );
}
