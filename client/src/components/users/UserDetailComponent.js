import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper, Container } from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  chip: {
    marginBottom: 4,
    marginLeft: 10
  },
  type: {
    width: 100,
    textAlign: "left",
    fontWeight: "bold"
  },
  image: {
    width: 175,
    height: 175,
    marginBottom: 16,
    border: "2px solid black"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

export default function UserDetailComponent({ user = {} }) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 32 }}>
        {user.profilepictureurl && (
          <div style={{ textAlign: "center" }}>
            <img
              src={user.profilepictureurl}
              alt="profilepicture"
              className={classes.image}
            />
          </div>
        )}
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          PROFILE
        </Typography>
        <div style={{ padding: 32 }}>
          <Typography variant="button" style={{ fontWeight: "bold" }}>
            Full Name :
          </Typography>
          {" " + user.name + " " + user.surname}
          <br />
          <Typography variant="button" style={{ fontWeight: "bold" }}>
            Birthdate :
          </Typography>
          {" " + moment(user.birthdate).format("D MMMM YYYY")}
          <br />
          <Typography variant="button" style={{ fontWeight: "bold" }}>
            Description :
          </Typography>
          {" " + user.description}
        </div>

        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          POSTS
        </Typography>

        <div style={{ padding: 32 }}>
          {user.posts.length < 1 && (
            <Typography variant="subtitle1">No posts</Typography>
          )}
          {user.posts.map(post => (
            <div key={post._id}>
              <b>
                <Link key={post._id} to={"/posts/" + post._id}>
                  {post.title}
                </Link>
              </b>{" "}
              - {moment(post.date).format("DD-MM-YYYY")}
              <br />
              <br />
            </div>
          ))}
        </div>

        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          BOOKMARKS
        </Typography>

        <div style={{ padding: 32 }}>
          {user.bookmarks.length < 1 && (
            <Typography variant="subtitle1">No bookmarks</Typography>
          )}
          {user.bookmarks.map(post => (
            <div key={post._id}>
              <b>
                <Link key={post._id} to={"/posts/" + post._id}>
                  {post.title}
                </Link>
              </b>{" "}
              - {moment(post.date).format("DD-MM-YYYY")}
              <br />
              <br />
            </div>
          ))}
        </div>
      </Paper>
    </Container>
  );
}
