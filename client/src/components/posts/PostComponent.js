import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Chip, Grid } from "@material-ui/core";
import moment from "moment";

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
  }
}));

export default function PostComponent({
  post = {
    _id: "1",
    title: "Comment simuler un article",
    description:
      "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.",
    image: "https://avatars1.githubusercontent.com/u/11267371?s=460&v=4",
    score: "4",
    date: moment().format("DD-MM-YYYY"),
    timetoread: 5,
    user: { name: "Maxime", surname: "AUBLET" },
    tags: ["Angular", "Java"],
    type: "WEB"
  }
}) {
  const classes = useStyles();

  const setBackgroundType = () => {
    switch (post.type) {
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
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item sm={2}>
            <img alt="complex" src={post.mainimage} width="100%" />
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
              <Typography
                variant="caption"
                component="p"
                style={{ textAlign: "right" }}
              >
                {"Score : " +
                  post.score +
                  " - Time to read : " +
                  post.timetoread}
              </Typography>

              {/* - AUTHOR AND DATE - */}
              {post.user && (
                <Typography variant="caption" style={{ fontWeight: "bold" }}>
                  {post.user.name + " " + post.user.surname + " - " + post.date}
                </Typography>
              )}
            </CardContent>
          </Grid>
          <Grid item sm={1}>
            <div className={classes.type}>
              <div className={classes.typeColor} style={setBackgroundType()}>
                {post.type}
              </div>
            </div>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
