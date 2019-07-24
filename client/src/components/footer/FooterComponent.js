import React from "react";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

export function FooterComponent() {
  return (
    <Container
      fixed
      style={{ marginTop: 96, borderTop: "1px solid #dadada", padding: 40 }}
    >
      <Typography variant="subtitle2" color="textSecondary">
        MediumMern ©2019 - AUBLET - CANAVAGGIO - LONGUET
      </Typography>
    </Container>
  );
}
