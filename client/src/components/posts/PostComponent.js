import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Chip, Grid, ButtonBase } from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    margin: 20
  },
  title: {
    borderBottom: "1px solid lightgrey",
    marginBottom: 5
  },
  chip: {
    marginBottom: 4,
    marginLeft: 10
  },
  type: {
    //transform: "rotate(90deg)",
    width: 100,
    textAlign: "right",
    fontWeight: "bold"
  },
  typeColor: {
    borderBottomLeftRadius: 5,
    padding: 2,
    paddingRight: 5,
    color: "white"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  description: {
    marginBottom: 10
  },
  cover: {
    width: 300
  },
  image: {
    width: 156,
    height: 156
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function PostComponent({
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
  }
}) {
  const classes = useStyles();

  const setBackgroundType = () => {
    switch (post.type.name) {
      case "WEB":
        return { backgroundColor: "#035EE8" };

      case "RESEAU":
        return { backgroundColor: "#00A92E" };

      case "SYSTEME":
        return { backgroundColor: "#f50057" };

      case "TECH":
        return { backgroundColor: "purple" };

      default:
        return { backgroundColor: "#37235e" };
    }
  };

  return (
    <>
      <Card className={classes.card}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item>
            <Link to={"/posts/" + post._id}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={post.mainimage}
                />
              </ButtonBase>
            </Link>
          </Grid>
          <Grid item sm={9}>
            <CardContent className={classes.content}>
              {/* - TITLE - */}
              <Typography className={classes.title} component="h5" variant="h5">
                {post.title}

                {/* - Tags - */}
                {post.tags.map(tag => (
                  <Chip
                    className={classes.chip}
                    variant="outlined"
                    key={tag}
                    label={tag}
                    size="small"
                  />
                ))}
              </Typography>

              {/* - DESCRIPTION - */}
              <Typography
                className={classes.description}
                variant="subtitle2"
                color="textSecondary"
              >
                {post.description}
              </Typography>

              {/* - KPI - */}
              <Typography variant="caption" component="p">
                {"Score : " +
                  post.score +
                  " - Time to read : " +
                  post.timetoread}
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
            </CardContent>
          </Grid>
          <Grid item>
            <div className={classes.type}>
              <div className={classes.typeColor} style={setBackgroundType()}>
                {post.type.name}
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
