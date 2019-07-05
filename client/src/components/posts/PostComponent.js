import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { Chip } from "@material-ui/core";

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
    padding: 10,
    width: 100,
    textAlign: "right",
    fontWeight: "bold"
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
    width: 200
  }
}));

export default function PostComponent({
  post = {
    id: "1",
    title: "Titre de l'article",
    description:
      "Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard.",
    image: "https://avatars1.githubusercontent.com/u/11267371?s=460&v=4"
  }
}) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={post.image}
          title="cardImage"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} component="h5" variant="h5">
              {post.title}
              <Chip
                className={classes.chip}
                variant="outlined"
                key="chip1"
                label="Angulax"
                size="small"
              />
              <Chip
                className={classes.chip}
                variant="outlined"
                key="chip2"
                label="Javax"
                size="small"
              />
            </Typography>
            <Typography
              className={classes.description}
              variant="subtitle2"
              color="textSecondary"
            >
              {post.description}
            </Typography>
            Lorenzo Canavaggio - 21/07/2019
          </CardContent>
        </div>
        <div className={classes.type}>
          <span>JAVA</span>
        </div>
      </Card>
    </>
  );
}
