import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";

export function CommentComponent({ comment }) {
  return (
    <>
      <div
        style={{ marginTop: 36, borderBottom: "1px solid #cacaca", padding: 8 }}
      >
        <Typography style={{ marginTop: 20 }} variant="body1">
          {comment.content}
        </Typography>

        <Typography
          style={{ marginLeft: 16, marginTop: 20, marginBottom: 8 }}
          variant="subtitle2"
        >
          De :{" "}
          <Link
            style={{ textDecoration: "none" }}
            to={"/user/" + comment.user._id}
          >
            {comment.user.name + " " + comment.user.surname}
          </Link>
          , le : {moment(comment.date).format("DD-MM-YYYY")}
        </Typography>
      </div>
    </>
  );
}
