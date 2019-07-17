import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Chip, Grid, ButtonBase, Button } from "@material-ui/core";
import moment from "moment";
import { Bookmarks, FavoriteOutlined } from "@material-ui/icons";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

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
    height: 175
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

export default function PostDetailComponent({
  post = {
    _id: "",
    title: "",
    description: "",
    score: "",
    date: moment().format("DD-MM-YYYY"),
    timetoread: 5,
    user: { name: "", surname: "" },
    tags: [],
    type: ""
  },
  handleSaveToBookmarks,
  handleFavorite,
  bookmarked,
  liked
}) {
  const classes = useStyles();

  const setBackgroundType = () => {
    switch (post.type.name) {
      case "WEB":
        return { color: "#035EE8" };

      case "RESEAU":
        return { color: "#00A92E" };

      case "SYSTEME":
        return { color: "#f50057" };

      case "TECH":
        return { color: "purple" };

      default:
        return { color: "#37235e" };
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        {/* ---- INFOS ---- */}
        <Grid item sm={2} style={{ borderRight: "1px solid grey" }}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            {/* Image */}
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={post.mainimage}
                />
              </ButtonBase>
            </Grid>
            {/* -- */}

            {/* - KPI - */}
            <Grid item>
              <Typography variant="caption" component="h4">
                <b>Score : </b>
                {post.score}
                <br />
                <b>Time to read : </b>
                {post.timetoread}m
              </Typography>
            </Grid>

            {/* Bookmark */}
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={handleSaveToBookmarks}
              >
                <Bookmarks
                  className={clsx(classes.leftIcon, classes.iconSmall)}
                />
                {bookmarked ? "Unbookmark" : "Bookmark"}
              </Button>
            </Grid>

            {/* Like */}
            <Grid item>
              <Button
                variant="outlined"
                size="small"
                className={classes.button}
                onClick={handleFavorite}
              >
                <FavoriteOutlined
                  color="secondary"
                  className={clsx(classes.leftIcon, classes.iconSmall)}
                />
                {liked ? "Unlike" : "like"}
              </Button>
            </Grid>

            {/* Tags */}
            <Grid item>
              {post.tags.map(tag => (
                <Chip
                  className={classes.chip}
                  variant="outlined"
                  key={tag}
                  label={tag}
                  size="small"
                />
              ))}
            </Grid>
            {/* -- */}

            {/* Type */}
            <Grid item>
              <div className={classes.type}>
                <div className={classes.typeColor} style={setBackgroundType()}>
                  TYPE {post.type.name}
                </div>
              </div>
            </Grid>
            {/* -- */}
          </Grid>
        </Grid>
        {/* ---- */}

        {/* ----  CONTENT ----*/}
        <Grid item sm={7}>
          {/* - TITLE - */}
          <Typography
            style={{ fontWeight: "bold" }}
            component="h4"
            variant="h4"
          >
            {post.title}
          </Typography>

          {/* - AUTHOR AND DATE - */}
          {post.user && (
            <Typography variant="caption" style={{ fontWeight: "bold" }}>
              {post.user.name +
                " " +
                post.user.surname +
                " - Ecrit le " +
                moment(post.date).format("DD-MM-YYYY à HH:mm")}
            </Typography>
          )}

          {/* CONTENT */}
          <div
            style={{ marginTop: 48 }}
            dangerouslySetInnerHTML={{
              __html: draftToHtml(
                convertToRaw(
                  EditorState.createWithContent(
                    convertFromRaw(JSON.parse(post.content))
                  ).getCurrentContent()
                )
              )
            }}
          />
        </Grid>
        {/* ---- */}

        {/* OTHER */}
        <Grid item sm={2} />
      </Grid>
    </>
  );
}
