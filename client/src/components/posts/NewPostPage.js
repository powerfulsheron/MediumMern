import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import NewPostFormContainer from "./NewPostFormContainer";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 50,
    textAlign: "left"
  },
  title: {
    fontWeight: "bold",
    marginBottom: 50
  }
}));

export function NewPostPage() {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        className={classes.root}
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item lg={10} md={10} xs={11}>
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            NEW POST
          </Typography>
          <Typography variant="subtitle2">
            Don't forget that this post have to have an interest !
          </Typography>

          <NewPostFormContainer />
        </Grid>
      </Grid>
    </Container>
  );
}
